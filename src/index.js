// DOM5: The lightweight DOM manipulation library

class DOM5 {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  // Set the HTML content of the selected element
  html(content) {
    if (content !== undefined) {
      this.element.innerHTML = content;
      return this;
    }
    return this.element.innerHTML;
  }

  // Set the text content of the selected element
  text(content) {
    if (content !== undefined) {
      this.element.textContent = content;
      return this;
    }
    return this.element.textContent;
  }
}

// Factory function to create a new DOM5 instance
function dom(selector) {
  return new DOM5(selector);
}

// Export the factory function to be used in other modules
module.exports = dom;
