# open-web-playground

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

## 📁 Project Structure

```
open-web-playground/
├── index.html          # Main HTML file
├── utils.js            # Utility functions
├── tests/              # Test files
│   └── utils.test.js   # Unit tests for utils.js
├── package.json        # Project dependencies and scripts
└── README.md          # Project documentation
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Write or update tests as needed
5. Ensure all tests pass (`npm test`)
6. Commit your changes (`git commit -m 'Add some feature'`)
7. Push to the branch (`git push origin feature/your-feature-name`)
8. Open a Pull Request

### Code Quality

- Write clean, readable code
- Add comments where necessary
- Follow existing code style
- Write tests for new features
- Ensure all tests pass before submitting PR

## 🏷️ Hacktoberfest

This project participates in [Hacktoberfest](https://hacktoberfest.com/)! We welcome contributions from developers of all skill levels during October.

## 📝 License

This project is licensed under the MIT License.

## 🌟 Show Your Support

Give a ⭐️ if you found this project helpful!
