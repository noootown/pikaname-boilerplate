# Pikaname Monorepo

## Introduction

This is the boilerplate made by me. Moreover, it's also the base of [Pikaname](https://pikaname.com)

## Prerequisite

- Node v10.15 works with this repo

## Setup

```bash
# install packages
yarn
# start all monorepos
yarn start
```

## Tools
- [Create React App](https://github.com/facebook/create-react-app)
    - Create React App is a tool provided by Facebook to quickly create react apps.
    - The reason we use this is becuase we don't want to touch complicated webpack settings.
- [Typescript](https://github.com/microsoft/TypeScript)
    - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
    - As the project grows, the feature of typescript allows developers to create bug-less code
    - We also use Typescript to transpile our code, so that we can share code between frontend and backend.
- [Lerna](https://github.com/lerna/lerna) & Monorepo
    - Monorepo allows developer to decouple modules into packages. This way, each subprojects can share the same code without duplicate.
    - With the use of Lerna, we can quickly setup monorepo.
- [Express](https://github.com/expressjs/express)
    - The basic server of Nodejs.
- [Eslint](https://github.com/eslint/eslint) + [Standard](https://github.com/standard/standard)
    - Tslint is going to deprecated. Therefore we use Eslint as our lint module.
    - Standard is a JavaScript style guide, with linter and automatic code fixer.
- [NVM](https://github.com/nvm-sh/nvm)
    - Node version Manager
- [Ramda](https://github.com/ramda/ramda)
    - Practical functional Javascript.
- [Google Analytics](https://analytics.google.com)
    - Recording customer actions.

# Project Structure

```
packages/
  subpackages/
    src/
      index.ts
    package.json      # package-specific dependencies
    tsconfig.json     # package-specific typescript config
.editorconfig         # editorconfig
.eslintignore         # eslint ignore config
.eslintrc.json        # eslint config
.gitignore            # git ignore config
.nvmrc                # node version config
lerna.json            # lerna config
package.json          # global package.json
README.md             # repo guide
tsconfig-lib.json     # typescript base config
yarn.lock             # yarn lock file
```
