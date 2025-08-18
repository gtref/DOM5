#!/usr/bin/env node

const { Command } = require('commander');
const { version } = require('../package.json');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const program = new Command();

program
  .name('dom5')
  .description('A simple CLI for the DOM5 library.')
  .version(version, '-v, --version', 'output the current version');

program
  .command('init <folder_name>')
  .description('Initialize a new project with a sample environment.')
  .action((folderName) => {
    const projectPath = path.resolve(process.cwd(), folderName);

    if (fs.existsSync(projectPath)) {
      console.error(`Error: Directory "${folderName}" already exists.`);
      process.exit(1);
    }

    console.log(`Creating a new project in ${projectPath}...`);

    fs.mkdirSync(projectPath);

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM5 Project</title>
  <style>
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <h1 id="title">Hello, DOM5!</h1>
  <p class="content">This is a sample project.</p>
  <button id="myButton">Click Me</button>
  <script src="https://cdn.jsdelivr.net/npm/dom5-js/dist/dom5.min.js"></script>
  <script src="main.js"></script>
</body>
</html>
`;

    const jsContent = `const title = dom5('#title');
const content = dom5('.content');
const button = dom5('#myButton');

console.log('Initial title text:', title.text());

title.text('Hello, World!');
content.addClass('highlight');

button.on('click', () => {
  title.toggleClass('highlight');
  alert('Button clicked!');
});
`;

    fs.writeFileSync(path.join(projectPath, 'index.html'), htmlContent);
    fs.writeFileSync(path.join(projectPath, 'main.js'), jsContent);

    console.log('Project initialized successfully!');
    console.log(`To get started:`);
    console.log(`  cd ${folderName}`);
    console.log(`  (Open index.html in your browser)`);
  });

function runNpmScript(scriptName) {
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const child = exec(`${npm} run ${scriptName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing "npm run ${scriptName}":`);
      console.error(stderr);
      process.exit(1);
    }
    console.log(stdout);
  });

  child.on('exit', (code) => {
    if (code !== 0) {
      console.error(`"npm run ${scriptName}" exited with code ${code}`);
    }
  });
}

program
  .command('build')
  .description('Build the library for production.')
  .action(() => {
    console.log('Building for production...');
    runNpmScript('build');
  });

program
  .command('dev')
  .description('Build the library for development.')
  .action(() => {
    console.log('Building for development...');
    runNpmScript('build:dev');
  });

program.parse(process.argv);
