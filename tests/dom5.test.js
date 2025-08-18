const dom5 = require('../src/index');

describe('DOM5', () => {
  beforeEach(() => {
    // Set up a basic DOM structure for each test
    document.body.innerHTML = `
      <div id="container">
        <h1 class="title">Hello</h1>
        <p class="content">Some text</p>
        <p class="content">More text</p>
        <button id="button">Click Me</button>
        <input type="text" id="input" value="initial value">
      </div>
    `;
  });

  test('should select a single element', () => {
    const title = dom5('.title');
    expect(title.elements.length).toBe(1);
    expect(title.elements[0].tagName).toBe('H1');
  });

  test('should select multiple elements', () => {
    const paragraphs = dom5('.content');
    expect(paragraphs.elements.length).toBe(2);
  });

  test('should get and set html content', () => {
    const title = dom5('.title');
    expect(title.html()).toBe('Hello');
    title.html('<span>New HTML</span>');
    expect(title.html()).toBe('<span>New HTML</span>');
  });

  test('should get and set text content', () => {
    const title = dom5('.title');
    expect(title.text()).toBe('Hello');
    title.text('New Text');
    expect(title.text()).toBe('New Text');
  });

  test('should add a class to elements', () => {
    const paragraphs = dom5('.content');
    paragraphs.addClass('highlight');
    paragraphs.each(element => {
      expect(element.classList.contains('highlight')).toBe(true);
    });
  });

  test('should remove a class from elements', () => {
    const paragraphs = dom5('.content');
    paragraphs.addClass('highlight');
    paragraphs.removeClass('highlight');
    paragraphs.each(element => {
      expect(element.classList.contains('highlight')).toBe(false);
    });
  });

  test('should toggle a class on elements', () => {
    const title = dom5('.title');
    title.toggleClass('toggled');
    expect(title.elements[0].classList.contains('toggled')).toBe(true);
    title.toggleClass('toggled');
    expect(title.elements[0].classList.contains('toggled')).toBe(false);
  });

  test('should get and set attribute values', () => {
    const input = dom5('#input');
    expect(input.attr('type')).toBe('text');
    input.attr('type', 'password');
    expect(input.attr('type')).toBe('password');
  });

  test('should get and set input value', () => {
    const input = dom5('#input');
    expect(input.val()).toBe('initial value');
    input.val('new value');
    expect(input.val()).toBe('new value');
  });

  test('should attach an event handler', () => {
    const button = dom5('#button');
    const mockFn = jest.fn();
    button.on('click', mockFn);
    button.elements[0].click();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
