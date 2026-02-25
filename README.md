## Lucas Daneluz – Portfolio

This repository contains the source code for the personal portfolio of **Lucas Daneluz**, built as a modern single-page application using Vite, React, and TypeScript.

---

## Tech stack

- **Vite** (bundler & dev server)
- **React** + **TypeScript**
- **Tailwind CSS** + **tailwindcss-animate**
- **shadcn/ui** components
- **Radix UI** primitives
- **Vitest** + Testing Library

---

## Getting started (local development)

### Prerequisites

- **Node.js** (active LTS recommended)
- **npm** (installed with Node)

### Installation

Clone the repository and install dependencies:

```sh
git clone <YOUR_GIT_URL>
cd lucas-portfolio
npm install
```

### Running the dev server

```sh
npm run dev
```

Then open `http://localhost:8080` in your browser.

### Building for production

```sh
npm run build
```

To preview the production build:

```sh
npm run preview
```

### Linting and tests

- Lint:

  ```sh
  npm run lint
  ```

- Tests:

  ```sh
  npm run test
  # or
  npm run test:watch
  ```

---

## Project structure (high level)

- `src/` – React components, routes, and application logic
- `index.html` – HTML entry point
- `vite.config.ts` – Vite configuration
- `tailwind.config.ts` / `postcss.config.js` – styling configuration
- `cursor-migration-md` – notes on migrating from the original Lovable.dev scaffold to a neutral setup
