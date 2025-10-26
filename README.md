# open-web-playground

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A beginner-friendly, collaborative playground for practicing and learning HTML, CSS, and JavaScript. Perfect for first-time contributors!

## 📚 About

This project provides a simple environment for developers to practice web development skills, contribute to open source, and learn by doing. Whether you're just starting out or looking to sharpen your skills, this playground welcomes all contributors!

## 🚀 Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, etc.)
- [Node.js](https://nodejs.org/) (v14 or higher) - for running tests
- A text editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Faizan-902/open-web-playground.git
   cd open-web-playground
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Open `index.html` in your browser to view the project.

## 🧪 Running Tests

This project uses [Jest](https://jestjs.io/) for unit testing JavaScript code.

### Run all tests:
```bash
npm test
```

### Run tests in watch mode:
```bash
npm run test:watch
```

### Generate coverage report:
```bash
npm run test:coverage
```

The coverage report will be generated in the `coverage/` directory. Open `coverage/index.html` in your browser to view detailed coverage information.

## 🤝 Contributing

We welcome contributions! Follow these steps to contribute:

1. **Fork the repository**
2. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. **Make your changes** and commit them:
   ```bash
   git commit -m "Add feature description"
   ```
4. **Push to your fork**:
   ```bash
   git push origin feature-name
   ```
5. **Open a Pull Request** and describe your changes.

### Testing Guidelines

- Write tests for new features and bug fixes
- Ensure all tests pass before submitting a PR
- Include both positive and negative test cases
- Follow the existing test structure in `tests/` directory

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
