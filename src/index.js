// DOM5: The lightweight DOM manipulation library

/**
 * A lightweight DOM manipulation library.
 */
class DOM5 {
  /**
   * Creates a new DOM5 instance.
   * @param {string} selector - A CSS selector to select an element.
   */
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  /**
   * Sets or gets the HTML content of the selected element.
   * @param {string} [content] - The HTML content to set. If not provided, returns the current HTML content.
   * @returns {DOM5|string} The DOM5 instance for chaining, or the HTML content.
   */
  html(content) {
    if (content !== undefined) {
      this.element.innerHTML = content;
      return this;
    }
    return this.element.innerHTML;
  }

  /**
   * Sets or gets the text content of the selected element.
   * @param {string} [content] - The text content to set. If not provided, returns the current text content.
   * @returns {DOM5|string} The DOM5 instance for chaining, or the text content.
   */
  text(content) {
    if (content !== undefined) {
      this.element.textContent = content;
      return this;
    }
    return this.element.textContent;
  }

  /**
   * Adds a class to the selected element.
   * @param {string} className - The class name to add.
   * @returns {DOM5} The DOM5 instance for chaining.
   */
  addClass(className) {
    this.element.classList.add(className);
    return this;
  }

  /**
   * Removes a class from the selected element.
   * @param {string} className - The class name to remove.
   * @returns {DOM5} The DOM5 instance for chaining.
   */
  removeClass(className) {
    this.element.classList.remove(className);
    return this;
  }

  /**
   * Toggles a class on the selected element.
   * @param {string} className - The class name to toggle.
   * @returns {DOM5} The DOM5 instance for chaining.
   */
  toggleClass(className) {
    this.element.classList.toggle(className);
    return this;
  }

  /**
   * Attaches an event handler to the selected element.
   * @param {string} eventName - The name of the event to listen for.
   * @param {function} handler - The event handler function.
   * @returns {DOM5} The DOM5 instance for chaining.
   */
  on(eventName, handler) {
    this.element.addEventListener(eventName, handler);
    return this;
  }
}

// Factory function to create a new DOM5 instance
function dom(selector) {
  return new DOM5(selector);
}

// Export the factory function to be used in other modules
module.exports = dom;
