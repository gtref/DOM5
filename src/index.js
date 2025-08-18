// DOM5: The lightweight DOM manipulation library

/**
 * A lightweight DOM manipulation library.
 */
class DOM5 {
  /**
   * Creates a new DOM5 instance.
   * @param {string} selector - A CSS selector to select elements.
   */
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
    if (this.elements.length === 0) {
      console.warn(`DOM5: No elements found for selector "${selector}"`);
    }
  }

  /**
   * Executes a callback for each selected element.
   * @param {function(element, index)} callback - A function to execute for each element.
   * @returns {DOM5} The DOM5 instance for chaining.
   */
  each(callback) {
    this.elements.forEach((element, index) => callback(element, index));
    return this;
  }

  /**
   * Sets or gets the HTML content of the selected elements.
   * @param {string} [content] - The HTML content to set. If not provided, returns the HTML content of the first element.
   * @returns {DOM5|string} The DOM5 instance for chaining, or the HTML content.
   */
  html(content) {
    if (content !== undefined) {
      return this.each(element => (element.innerHTML = content));
    }
    return this.elements.length > 0 ? this.elements[0].innerHTML : '';
  }

  /**
   * Sets or gets the text content of the selected elements.
   * @param {string} [content] - The text content to set. If not provided, returns the text content of the first element.
   * @returns {DOM5|string} The DOM5 instance for chaining, or the text content.
   */
  text(content) {
    if (content !== undefined) {
      return this.each(element => (element.textContent = content));
    }
    return this.elements.length > 0 ? this.elements[0].textContent : '';
  }

  /**
   * Adds a class to the selected elements.
   * @param {string} className - The class name to add.
   * @returns {DOM5} The DOM5 instance for chaining.
   */
  addClass(className) {
    return this.each(element => element.classList.add(className));
  }

  /**
   * Removes a class from the selected elements.
   * @param {string} className - The class name to remove.
   * @returns {DOM5} The DOM5 instance for chaining.
   */
  removeClass(className) {
    return this.each(element => element.classList.remove(className));
  }

  /**
   * Toggles a class on the selected elements.
   * @param {string} className - The class name to toggle.
   * @returns {DOM5} The DOM5 instance for chaining.
   */
  toggleClass(className) {
    return this.each(element => element.classList.toggle(className));
  }

  /**
   * Attaches an event handler to the selected elements.
   * @param {string} eventName - The name of the event to listen for.
   * @param {function} handler - The event handler function.
   * @returns {DOM5} The DOM5 instance for chaining.
   */
  on(eventName, handler) {
    return this.each(element => element.addEventListener(eventName, handler));
  }

  /**
   * Gets an attribute value for the first element or sets an attribute value for all selected elements.
   * @param {string} name - The name of the attribute.
   * @param {string} [value] - The value to set. If not provided, returns the attribute value of the first element.
   * @returns {DOM5|string} The DOM5 instance for chaining, or the attribute value.
   */
  attr(name, value) {
    if (value !== undefined) {
      return this.each(element => element.setAttribute(name, value));
    }
    return this.elements.length > 0 ? this.elements[0].getAttribute(name) : null;
  }

  /**
   * Gets the value of a CSS property for the first element or sets CSS properties for all selected elements.
   * @param {string|object} prop - The CSS property name or an object of property-value pairs.
   * @param {string} [value] - The value to set for the CSS property.
   * @returns {DOM5|string} The DOM5 instance for chaining, or the CSS property value.
   */
  css(prop, value) {
    if (typeof prop === 'object') {
      return this.each(element => {
        for (const key in prop) {
          element.style[key] = prop[key];
        }
      });
    }
    if (value !== undefined) {
      return this.each(element => (element.style[prop] = value));
    }
    return this.elements.length > 0 ? getComputedStyle(this.elements[0])[prop] : '';
  }

  /**
   * Appends content to the selected elements.
   * @param {string|Node} content - The HTML string or Node to append.
   * @returns {DOM5} The DOM5 instance for chaining.
   */
  append(content) {
    return this.each(element => {
      if (typeof content === 'string') {
        element.insertAdjacentHTML('beforeend', content);
      } else {
        element.appendChild(content.cloneNode(true));
      }
    });
  }

  /**
   * Prepends content to the selected elements.
   * @param {string|Node} content - The HTML string or Node to prepend.
   * @returns {DOM5} The DOM5 instance for chaining.
   */
  prepend(content) {
    return this.each(element => {
      if (typeof content === 'string') {
        element.insertAdjacentHTML('afterbegin', content);
      } else {
        element.insertBefore(content.cloneNode(true), element.firstChild);
      }
    });
  }

  /**
   * Removes the selected elements from the DOM.
   * @returns {DOM5} The DOM5 instance for chaining.
   */
  remove() {
    return this.each(element => element.parentNode.removeChild(element));
  }

  /**
   * Gets the current value of the first element or sets the value of all selected elements.
   * @param {string} [value] - The value to set. If not provided, returns the value of the first element.
   * @returns {DOM5|string} The DOM5 instance for chaining, or the value.
   */
  val(value) {
    if (value !== undefined) {
      return this.each(element => (element.value = value));
    }
    return this.elements.length > 0 ? this.elements[0].value : '';
  }
}

// Factory function to create a new DOM5 instance
function dom5(selector) {
  return new DOM5(selector);
}

// Export the factory function to be used in other modules
module.exports = dom5;
