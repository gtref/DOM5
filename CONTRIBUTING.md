# Contributing to DOM5.js

First off, thank you for considering contributing! It's people like you that make the open-source community such a great place. We welcome any type of contribution, not just code.

## How Can I Contribute?

### Reporting Bugs

- Before creating a bug report, please check the existing [issues](https://github.com/gtref/DOM5/issues) to see if the problem has already been reported.
- If you find a new bug, please provide a clear title and description, a code sample or test case demonstrating the issue, and any other relevant information.

### Suggesting Enhancements

- We are open to suggestions! If you have an idea for a new feature or an improvement to an existing one, please open an issue to start a discussion.

### Pull Requests

- Fork the repository and create your branch from `main`.
- If you've added code that should be tested, add tests.
- Ensure the test suite passes (`npm test`).
- Make sure your code is formatted correctly (if a linter is configured).

## Local Development Setup

To get your development environment set up and start contributing, please follow these steps:

1.  **Fork & Clone:** Fork the repository to your own GitHub account and then clone it to your local machine.

    ```bash
    git clone https://github.com/<YOUR_USERNAME>/DOM5.git
    cd DOM5
    ```

2.  **Install Dependencies:** Install the project dependencies using npm. This will install webpack, Jest, and other required packages.

    ```bash
    npm install
    ```

3.  **Build the Project:**
    - To create a development build (un-minified with source maps), run:
      ```bash
      npm run build:dev
      ```
    - To create a production build (minified), run:
      ```bash
      npm run build
      ```

4.  **Run Tests:** To make sure everything is working correctly and your changes haven't introduced any regressions, run the test suite:

    ```bash
    npm test
    ```

We look forward to your contributions!
