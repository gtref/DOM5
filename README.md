# DOM5.js

A simple and lightweight JavaScript library for DOM manipulation.

## Installation

You can install `dom5-js` using npm:

```bash
npm install dom5-js
```

## Usage

### In the Browser

You can include the bundled `dom.js` file in your HTML and use the `dom()` function globally.

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM5.js Example</title>
</head>
<body>
  <h1 id="title">Hello, World!</h1>
  <script src="path/to/dist/dom.js"></script>
  <script>
    // Select the h1 element and change its text
    dom('#title').text('Hello, DOM5.js!');

    // Add a class to the h1 element
    dom('#title').addClass('my-class');

    // Add a click event listener
    dom('#title').on('click', () => {
      dom('#title').toggleClass('highlight');
    });
  </script>
</body>
</html>
```

### As a Module

You can also import `dom5-js` as a module in your JavaScript files.

```javascript
import dom from 'dom5-js';

dom('#title').text('Hello from a module!');
```

### Command-Line Interface (CLI)

`dom5-js` also comes with a simple command-line interface.

To see the version:

```bash
DOM5 --version
```

To see the help menu:

```bash
DOM5 --help
```

## API

The `dom()` function returns a `DOM5` instance with the following methods:

### `.html(content)`

Sets or gets the HTML content of the selected element.

-   `content` (optional): The HTML content to set. If not provided, returns the current HTML content.

### `.text(content)`

Sets or gets the text content of the selected element.

-   `content` (optional): The text content to set. If not provided, returns the current text content.

### `.addClass(className)`

Adds a class to the selected element.

-   `className`: The class name to add.

### `.removeClass(className)`

Removes a class from the selected element.

-   `className`: The class name to remove.

### `.toggleClass(className)`

Toggles a class on the selected element.

-   `className`: The class name to toggle.

### `.on(eventName, handler)`

Attaches an event handler to the selected element.

-   `eventName`: The name of the event to listen for.
-   `handler`: The event handler function.

## License

This project is licensed under the ISC License.
