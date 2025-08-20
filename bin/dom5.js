#!/usr/bin/env node

const { Command } = require('commander');
const { version } = require('../package.json');
const fs = require('fs');
const path = require('path');

const program = new Command();

program
  .name('dom5')
  .description('A simple CLI for the DOM5 library.')
  .version(version, '-v, --version', 'output the current version');

program
  .command('init <folder_name>')
  .description('Initialize a new project with a sample environment.')
  .option('--cli', 'Create a command-line application.')
  .action((folderName, options) => {
    const projectPath = path.resolve(process.cwd(), folderName);

    if (fs.existsSync(projectPath)) {
      console.error(`Error: Directory "${folderName}" already exists.`);
      process.exit(1);
    }

    fs.mkdirSync(projectPath);

    if (options.cli) {
      // --- CLI Project Template ---
      console.log(`Creating a new CLI project in ${projectPath}...`);

      const cliPackageJson = {
        name: folderName,
        version: "1.0.0",
        description: "A CLI app created with dom5 init",
        main: "index.js",
        bin: {
          [folderName]: "index.js"
        },
        scripts: {
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        keywords: [],
        author: "",
        license: "ISC",
        dependencies: {
          "chalk": "^4.1.2",
          "commander": "^8.3.0"
        }
      };

      const cliIndexJsContent = '#!/usr/bin/env node\n' +
        'const { Command } = require(\'commander\');\n' +
        'const logger = require(\'./logger\');\n\n' +
        'const program = new Command();\n\n' +
        'program\n' +
        '  .version(\'1.0.0\')\n' +
        '  .description(\'A sample CLI application\');\n\n' +
        'program\n' +
        '  .command(\'greet <name>\')\n' +
        '  .description(\'Greets the specified person\')\n' +
        '  .action((name) => {\n' +
        '    logger.success(`Hello, ${name}!`);\n' +
        '    logger.info(\'This is an informational message.\');\n' +
        '    logger.warn(\'This is a warning message.\');\n' +
        '    logger.error(\'This is an error message.\');\n' +
        '  });\n\n' +
        'program.parse(process.argv);\n';

      const cliLoggerJsContent = 'const chalk = require(\'chalk\');\n\n' +
        'const logger = {\n' +
        '  info: (message) => {\n' +
        '    console.log(chalk.blue(message));\n' +
        '  },\n' +
        '  success: (message) => {\n' +
        '    console.log(chalk.green(message));\n' +
        '  },\n' +
        '  warn: (message) => {\n' +
        '    console.log(chalk.yellow(message));\n' +
        '  },\n' +
        '  error: (message) => {\n' +
        '    console.log(chalk.red(message));\n' +
        '  },\n' +
        '};\n\n' +
        'module.exports = logger;\n';

      fs.writeFileSync(path.join(projectPath, 'package.json'), JSON.stringify(cliPackageJson, null, 2));
      fs.writeFileSync(path.join(projectPath, 'index.js'), cliIndexJsContent);
      fs.writeFileSync(path.join(projectPath, 'logger.js'), cliLoggerJsContent);

      console.log('CLI project initialized successfully!');
      console.log('To get started:');
      console.log(`  cd ${folderName}`);
      console.log('  npm install');
      console.log(`  npm link`);
      console.log(`  ${folderName} greet World`);

    } else {
      // --- Web Project Template ---
      console.log(`Creating a new web project in ${projectPath}...`);

      const htmlContent = '<!DOCTYPE html>\\n' +
        '<html lang="en">\\n' +
        '<head>\\n' +
        '  <meta charset="UTF-8">\\n' +
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n' +
        '  <title>DOM5 Project</title>\\n' +
        '  <style>\\n' +
        '    body { font-family: sans-serif; color: #333; }\\n' +
        '    .container { max-width: 600px; margin: 2em auto; padding: 1em 2em; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }\\n' +
        '    .highlight { background-color: #fffbe6; }\\n' +
        '    .item-list li { padding: 8px 0; border-bottom: 1px solid #eee; }\\n' +
        '    .item-list li:last-child { border-bottom: none; }\\n' +
        '    .controls { margin-top: 1em; }\\n' +
        '    input[type="text"] { padding: 8px; margin-right: 5px; border: 1px solid #ccc; border-radius: 3px; }\\n' +
        '    button { padding: 8px 12px; border: none; background-color: #007bff; color: white; border-radius: 3px; cursor: pointer; }\\n' +
        '    button:hover { background-color: #0056b3; }\\n' +
        '    #removeButton { background-color: #dc3545; margin-left: 5px; }\\n' +
        '    #removeButton:hover { background-color: #c82333; }\\n' +
        '    hr { border: none; border-top: 1px solid #eee; margin: 1.5em 0; }\\n' +
        '  </style>\\n' +
        '</head>\\n' +
        '<body>\\n' +
        '  <div class="container">\\n' +
        '    <h1 id="title">Hello, DOM5!</h1>\\n' +
        '    <p class="content">This is a sample project demonstrating dom5.js features.</p>\\n' +
        '    <hr>\\n' +
        '    <h2>Dynamic To-Do List</h2>\\n' +
        '    <div class="controls">\\n' +
        '      <input type="text" id="itemInput" placeholder="Add a new item...">\\n' +
        '      <button id="addButton">Add Item</button>\\n' +
        '    </div>\\n' +
        '    <ul id="itemList" class="item-list">\\n' +
        '      <li>First item</li>\\n' +
        '    </ul>\\n' +
        '    <button id="removeButton">Remove Last Item</button>\\n' +
        '    <hr>\\n' +
        '    <button id="highlightButton">Toggle Highlight on Title</button>\\n' +
        '  </div>\\n' +
        '  <script src="https://cdn.jsdelivr.net/npm/dom5-js/dist/dom5.min.js"></script>\\n' +
        '  <script src="main.js"></script>\\n' +
        '</body>\\n' +
        '</html>';

      const jsContent = '// Select elements from the DOM\\n' +
        'const title = dom5(\'#title\');\\n' +
        'const content = dom5(\'.content\');\\n' +
        'const highlightButton = dom5(\'#highlightButton\');\\n' +
        'const itemInput = dom5(\'#itemInput\');\\n' +
        'const addButton = dom5(\'#addButton\');\\n' +
        'const removeButton = dom5(\'#removeButton\');\\n' +
        'const itemList = dom5(\'#itemList\');\\n\\n' +
        '// --- Feature Demonstration ---\\n\\n' +
        '// 1. Get and set text content\\n' +
        'console.log(\'Initial title text:\', title.text());\\n' +
        'title.text(\'Welcome to DOM5!\');\\n\\n' +
        '// 2. Add a class to an element\\n' +
        'content.addClass(\'highlight\');\\n' +
        'console.log(\'Added "highlight" class to the paragraph.\');\\n\\n' +
        '// 3. Handle click events\\n' +
        'highlightButton.on(\'click\', () => {\\n' +
        '  title.toggleClass(\'highlight\');\\n' +
        '  console.log(\'Toggled highlight on title.\');\\n' +
        '});\\n\\n' +
        '// 4. Append new elements & get input value\\n' +
        'addButton.on(\'click\', () => {\\n' +
        '  const newItemText = itemInput.val();\\n' +
        '  if (newItemText) {\\n' +
        '    itemList.append(`<li>${newItemText}</li>`);\\n' +
        '    console.log(`Appended new item: ${newItemText}`);\\n' +
        '    itemInput.val(\'\'); // Clear the input field after adding\\n' +
        '  }\\n' +
        '});\\n\\n' +
        '// 5. Remove elements\\n' +
        'removeButton.on(\'click\', () => {\\n' +
        '  const lastItem = dom5(\'#itemList li:last-child\');\\n' +
        '  if (lastItem.elements.length > 0) {\\n' +
        '    const removedText = lastItem.text();\\n' +
        '    lastItem.remove();\\n' +
        '    console.log(`Removed last item: ${removedText}`);\\n' +
        '  } else {\\n' +
        '    console.log(\'No items to remove.\');\\n' +
        '  }\\n' +
        '});\\n\\n' +
        '// 6. Chaining methods\\n' +
        '// You can chain methods for more concise code, for example:\\n' +
        '// dom5(\'p\').addClass(\'new-class\').css(\'color\', \'blue\');';

      fs.writeFileSync(path.join(projectPath, 'index.html'), htmlContent);
      fs.writeFileSync(path.join(projectPath, 'main.js'), jsContent);

      console.log('Project initialized successfully!');
      console.log('To get started:');
      console.log(`  cd ${folderName}`);
      console.log('  (Open index.html in your browser)');
    }
  });

program.parse(process.argv);
