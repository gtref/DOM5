# DOM5.js

[![Open in GitHub Codespaces](https://github.com/codespaces/button)](https://github.com/codespaces/new/gtref/DOM5)

A simple and lightweight JavaScript library for modern DOM manipulation, inspired by jQuery.

[![npm version](https://badge.fury.io/js/dom5-js-1.svg)](https://badge.fury.io/js/dom5-js-1)

## Features

-   **Lightweight**: A small footprint, perfect for projects where performance matters.
-   **jQuery-like API**: A familiar and expressive API for DOM manipulation.
-   **Chainable**: All manipulation methods are chainable for clean and concise code.
-   **CLI Tool**: Comes with a command-line tool to initialize projects.
-   **Modern**: Uses modern JavaScript features and a modern build process.

## Installation

You can install `dom5-js-1` using npm:

```bash
npm install dom5-js-1
```

## Usage

### In the Browser (via CDN)

The easiest way to get started is by using the JSDelivr CDN. Include this script tag in your HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/dom5-js-1/dist/dom5.min.js"></script>
```

Then you can use the `dom5()` function globally.

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM5.js Example</title>
</head>
<body>
  <h1 id="title">Hello, World!</h1>
  <script src="https://cdn.jsdelivr.net/npm/dom5-js-1/dist/dom5.min.js"></script>
  <script>
    const title = dom5('#title');

    // Change the text of the h1 element
    title.text('Hello, DOM5.js!');

    // Add a class to the h1 element
    title.addClass('my-class');

    // Add a click event listener
    title.on('click', () => {
      title.toggleClass('highlight');
    });
  </script>
</body>
</html>
```

### As a Module

You can also import `dom5-js-1` as a module in your JavaScript projects.

```javascript
import dom5 from 'dom5-js-1';

dom5('#title').text('Hello from a module!');
```

## Command-Line Interface (CLI)

`dom5-js-1` comes with a command-line interface to help you get started quickly.

To see the version:
```bash
dom5 --version
```

### `init`

Initialize a new project with a sample `index.html` and `main.js`.

```bash
dom5 init my-new-project
```


## API

The `dom5()` function returns a `DOM5` instance. All methods that modify the DOM are chainable. Getters will return a value from the first element in the selection.

-   **`html(content)`**: Sets or gets the HTML content.
-   **`text(content)`**: Sets or gets the text content.
-   **`addClass(className)`**: Adds a class.
-   **`removeClass(className)`**: Removes a class.
-   **`toggleClass(className)`**: Toggles a class.
-   **`on(eventName, handler)`**: Attaches an event handler.
-   **`attr(name, value)`**: Sets or gets an attribute value.
-   **`css(prop, value)`**: Sets or gets a CSS property value.
-   **`append(content)`**: Appends content to the end of each selected element.
-   **`prepend(content)`**: Prepends content to the beginning of each selected element.
-   **`remove()`**: Removes the selected elements from the DOM.
-   **`val(value)`**: Sets or gets the value of form elements.
-   **`each(callback)`**: Iterates over the selected elements.

## Contributing

Contributions are welcome! We have a set of guidelines to help you get started. Please see our [Contributing Guide](CONTRIBUTING.md) for more details on how to set up your development environment, run tests, and submit pull requests.

## License

This project is licensed under the MIT License.
