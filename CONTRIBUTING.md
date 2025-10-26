# Contributing to Open Web Playground 💡

Thank you for your interest in contributing to the Open Web Playground project! 🎉

We welcome contributions of all kinds — whether you're fixing bugs, improving documentation, adding new features, or proposing enhancements. This guide will help you get started.

---

## 📜 Code of Conduct

This project adheres to a Code of Conduct to ensure a welcoming and inclusive environment for all contributors. By participating, you are expected to uphold this code.

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. We are committed to providing a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

---

## 🪄 How to Fork and Clone the Repository

### 1. Fork the Repository

1. Navigate to the [Open Web Playground repository](https://github.com/Faizan-902/open-web-playground)
2. Click the **Fork** button in the top-right corner to create your own copy of the repository

### 2. Clone Your Fork

Clone your forked repository to your local machine:

```bash
git clone https://github.com/<your-username>/open-web-playground.git
cd open-web-playground
```

### 3. Add Upstream Remote

Add the original repository as an upstream remote to keep your fork synchronized:

```bash
git remote add upstream https://github.com/Faizan-902/open-web-playground.git
git fetch upstream
```

---

## 🌿 Steps to Create a Branch

Always create a new branch for your changes. This keeps your work organized and makes it easier to manage multiple contributions.

### Create and Switch to a New Branch

```bash
git checkout -b <branch-name>
```

**Branch Naming Conventions:**
- Use descriptive names that reflect the purpose of your changes
- Use kebab-case (lowercase with hyphens)
- Examples:
  - `fix-navigation-bug`
  - `add-dark-mode-feature`
  - `update-readme-documentation`
  - `improve-accessibility`

---

## ✍️ Commit Message Conventions

Good commit messages help maintain a clear project history. Follow these guidelines:

### Commit Message Format

```
<type>: <short description>

<optional detailed description>

<optional footer>
```

### Commit Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring without changing functionality
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates, etc.

### Examples

```bash
# Good commit messages
git commit -m "feat: add user authentication system"
git commit -m "fix: resolve navigation menu overflow on mobile"
git commit -m "docs: update installation instructions in README"
git commit -m "style: format code according to project style guide"

# Bad commit messages (avoid these)
git commit -m "fixed stuff"
git commit -m "updates"
git commit -m "asdfgh"
```

### Best Practices

- Use the imperative mood ("add feature" not "added feature")
- Keep the first line under 50 characters
- Capitalize the first letter
- Don't end with a period
- Provide context in the detailed description if needed

---

## 🚀 Pull Request Process

Once you've made your changes and committed them to your branch, you're ready to submit a pull request.

### 1. Push Your Changes

Push your branch to your forked repository:

```bash
git push origin <branch-name>
```

### 2. Create a Pull Request

1. Navigate to the [original repository](https://github.com/Faizan-902/open-web-playground)
2. Click the **Pull requests** tab
3. Click **New pull request**
4. Click **compare across forks**
5. Select your fork and branch as the source
6. Click **Create pull request**

### 3. Fill Out the PR Template

Provide a clear and detailed description of your changes:

**Title:** Use a clear, descriptive title

**Description should include:**
- **What:** What changes did you make?
- **Why:** Why did you make these changes?
- **How:** How did you implement the changes?
- **Testing:** What testing did you perform?
- **Related Issues:** Reference any related issues (e.g., "Fixes #123" or "Addresses #456")

### 4. Review Process

- A maintainer will review your pull request
- You may be asked to make changes or provide additional information
- Be responsive to feedback and make requested updates
- Once approved, your PR will be merged into the main branch

### PR Checklist

Before submitting, ensure:

- [ ] Code follows the project's style guidelines
- [ ] Commits follow the commit message conventions
- [ ] Documentation has been updated (if applicable)
- [ ] Tests have been added or updated (if applicable)
- [ ] All tests pass locally
- [ ] Branch is up to date with the main branch

---

## 🐛 Issue Reporting Guidelines

Found a bug or have a feature request? We'd love to hear about it!

### Before Creating an Issue

1. **Search existing issues** to avoid duplicates
2. **Check closed issues** to see if the problem has been addressed
3. **Ensure you're using the latest version** of the project

### Creating a Bug Report

When reporting a bug, include:

**Required Information:**
- **Title:** Clear, concise description of the issue
- **Description:** Detailed explanation of the problem
- **Steps to Reproduce:** Step-by-step instructions to recreate the issue
- **Expected Behavior:** What you expected to happen
- **Actual Behavior:** What actually happened
- **Environment:**
  - Operating System (e.g., Windows 10, macOS 13.0, Ubuntu 22.04)
  - Browser and version (if applicable)
  - Project version or commit hash
- **Screenshots/Logs:** Any relevant screenshots or error logs

**Bug Report Template:**

```markdown
## Description
[Clear description of the bug]

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Environment
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 120]
- Version: [e.g., v1.2.3]

## Screenshots
[If applicable, add screenshots]

## Additional Context
[Any other relevant information]
```

### Creating a Feature Request

When proposing a new feature, include:

- **Title:** Clear description of the feature
- **Problem:** What problem does this feature solve?
- **Proposed Solution:** How should this feature work?
- **Alternatives:** Have you considered any alternatives?
- **Additional Context:** Any other relevant information

**Feature Request Template:**

```markdown
## Feature Description
[Clear description of the proposed feature]

## Problem Statement
[What problem does this solve?]

## Proposed Solution
[How should this feature work?]

## Alternatives Considered
[What other solutions have you thought about?]

## Additional Context
[Any other relevant information, mockups, examples]
```

---

## 💻 Development Guidelines

### Code Style

- Follow the existing code style and conventions
- Use meaningful variable and function names
- Write clear, concise comments where necessary
- Keep functions small and focused on a single task

### Testing

- Test your changes thoroughly before submitting
- Add tests for new features when applicable
- Ensure all existing tests pass

### Documentation

- Update relevant documentation when making changes
- Add comments to complex code sections
- Update the README if your changes affect usage

---

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

If you have any questions or need help, feel free to:
- Open an issue for discussion
- Reach out to the maintainers
- Join our community discussions

Happy coding! 🚀
