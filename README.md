## vite-r-ts-starter-pack

👋 Welcome to my Custom Web Development Template by [Jonathan D Kaonga](https://github.com/jonthedev)

This template provides a robust foundation for building modern web applications, leveraging the power and flexibility of popular technologies:

[Vite](https://vitejs.dev/): A fast and efficient build tool that offers lightning-fast development and optimized production builds.

[React](https://react.dev/): A popular JavaScript library for building user interfaces, enabling you to create interactive and dynamic web applications with ease.

[TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that enhances code quality, improves developer productivity, and enables robust type checking and autocompletion features.

[Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework that enables rapid and responsive UI development by providing a comprehensive set of utility classes for styling elements and components.

## Setup

### Prerequisites

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

All tests can be found in the `/src/tests/` directory.

1. Run Tests

```terminal
npm run test
```

---

### Styling

For styling I use [tailwindCSS](https://tailwindcss.com/).

To keep the tailwind config theme lean I suggest abstracting chunks into the `/src/theme` directory.

---

### Code Quality

[Prettier](https://prettier.io/) - For code formatting.

[Prettier Tailwind](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - Automatic Class Sorting with Prettier

[Eslint](https://eslint.org/) - Statically analyzes your code.

[TypeScript-Eslint](https://typescript-eslint.io/) - Enables ESLint and Prettier to support TypeScript.

[Lint Staged](https://github.com/lint-staged/lint-staged) - Run linters against staged git files.

[Commit Lint](https://commitlint.js.org/#/) - Helps your team adhere to a commit convention.

[Husky](https://typicode.github.io/husky/) - Husky along with commit lint helps improves your commits with git hooks.

---

### Committing

There is a pre-commit hook that automates the following flow on the `/src` directory and all `ts,tsx` files, before asking for your commit message.

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

---

### Build

Build the application

```terminal
npm run build
```

The app is optimized for production by using vite's [chunking strategy](https://vitejs.dev/guide/build).

Check the `/dist` folder
