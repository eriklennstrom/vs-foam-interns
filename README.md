# vs-foam-interns

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
## Workflow

First off: We never push directly to main.

When we start working on a new component, we create a new branch for it. The naming of the branch should follow this structure ```[your-first-name]-[component-name]-[issue-number (if there is any)].```
When you feel the component is ready, make a PR to main and set your other colleague as a reviewer. You should always review eachothers code and understand what it does. If there is something you don't get the graps of in the code or if you have an idea of how to make the code better, less redundant or easier to understand comment it on the PR. When merging use "squash and merge".
## Repo Structure
```
├── public - Static assets for initiating of app
├── src - Basefolder for App
│   ├── assets - Static assets (Fonts, images, logos, icons)
│   ├── components
│   │   ├── [component] - Includes vue component, story, test, scss (specific for that component)
│   ├── constants - Common constants (names, function, maps)
│   ├── directives - Custom Vue directives
│   ├── layouts - Page layouts, and layout components (templates)
│   ├── lib -
│   ├── rest-api-service - Axios instances of every endpoint
│   ├── router - Routes for the vue-router
│   ├── store - Internal store for state-handling
│   ├── styles - Commons scss files
│   ├── types - Typescript definitions
│   ├── views - All vue-things related to a specific view
├── tests
│   ├── e2e - End to end test with Nightwatch
│   └── unit - Unit tests with Jest
│       ├── __mocks__ - Mockdata, functions, and interceptors (msw)
```

### Browser support

We support the latest 2 versions of the modern browsers. Browsers that we support are:
- Google Chrome
- Firefox
- Safari
- Internet Explorer Edge

We do not support IE11 as that is marked deprecated by Microsoft.
