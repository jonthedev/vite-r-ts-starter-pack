## Introduction

🥷 Jonathan Kaonga

🚀 Web / Creative Developer

📍 London 🇬🇧 / Amsterdam 🇳🇱

🌐 https://j-dev.online/

---

## About J Dev

This space serves as a online portfolio to showcase some of my projects.

Check my [github readme](https://github.com/jonthedev/jonthedev) for more details about me.

## Setup

### Prerequisites.

```terminal
node : >=18.12.0
```

Check your node version.

```terminal
node -v
```

### Install and run

1. Before running any other commands install dependencies

```terminal
npm install
```

2. Run dev environment

```terminal
npm run dev
```

---

### Aliases

Allows for easier imports in project.

```js
// vite.config.ts

alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@db": path.resolve(__dirname, "./src/db"),
      "@theme": path.resolve(__dirname, "./src/theme"),
    },
```

```json

// tsconfig.json

"paths": {
      "@src/*": ["./src/*"],
      "@assets/*": ["./src/assets/*"],
      "@components/*": ["./src/components/*"],
      "@db/*": ["./src/db/*"],
      "@theme/*": ["./src/theme/*"]
    }
```

### Testing

Project uses [vitest](https://vitest.dev/) for testing.

All tests can be found in the **src/tests/** directory.

1. Run Tests

```terminal
npm run test
```

---

### Styling

For styling I use [tailwindCSS](https://tailwindcss.com/).

Some styles are abstracted to keep the config size lean.

Check the **src/theme** directory.

---

### Code Quality

[Prettier](https://prettier.io/) - For code formatting.

[Eslint](https://eslint.org/) - Statically analyzes your code.

[TypeScript-Eslint](https://typescript-eslint.io/) - Enables ESLint and Prettier to support TypeScript.

[LintSstaged](https://github.com/lint-staged/lint-staged) - Run linters against staged git files.

[Commit Lint](https://commitlint.js.org/#/) - Helps your team adhere to a commit convention.

[Husky](https://typicode.github.io/husky/) - Husky along with commit lint helps improves your commits with git hooks.

---


### Committing

There is a pre-commit hook that automates the following flow on the **src** directory, before asking for your commit message.

The message must follow the [conventional changelog standard](https://github.com/conventional-changelog/commitlint).


You can also run these scripts individually.

1. Format code

```terminal
npm run format
```

2. Fix linting errors if any

```terminal
npm run lint:fix
```

3. Linting code

```terminal
npm run lint
```

4. Run Tests

```terminal
npm run test
```









