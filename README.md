# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Search and AI

Every page is prerendered to static HTML at build time (React Router 7 framework mode, `ssr: false` with `prerender` in `react-router.config.ts`), so search engines and AI crawlers get each page's own title, description, canonical URL, Open Graph tags, JSON-LD and full text without running JavaScript. The browser then hydrates the page and navigation stays client-side.

- **Where the facts live**: `src/data/site.ts` (page titles and descriptions, company facts, founder bio, stats, press) and `src/data/portfolio.ts` (companies, milestones).
- **Generated at build time** from the same data: `robots.txt`, `sitemap.xml` and `llms.txt` (routes in `src/routes/`), the JSON-LD (`src/lib/jsonld.ts`) and `404.html`, which Firebase serves with status 404 for unknown URLs.
- **Add a page**: create it in `src/pages/` with a `meta` export, add it to `src/routes.ts` and to `pages` in `src/data/site.ts`, then run `npm run build && npm run verify`.
- **Check**: `npm run verify` checks the build output (titles, descriptions, canonicals, one h1, text, robots.txt, sitemap.xml, llms.txt, 404.html). `npm run preview` serves the build with the Firebase hosting emulator on http://127.0.0.1:5050.
