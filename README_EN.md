2048 (PC version).
[Chinese version](https://github.com/minhLake/2048)

## table of Contents

- [technology stack](# technology stack)
- [directory structure](# directory structure)

## Technology stack

The development of the need to use the main technology, and related tools:

* [`npm`](https://www.npmjs.com/) NodeJS comes with the package management tool.
* [`yarn`](https://yarnpkg.com/lang/en/) NodeJS second generation of package management tools.
* [`webpack`](https://github.com/webpack/webpack) is currently the most powerful module packaging tool.
* [`create-react-app`](https://github.com/facebookincubator/create-react-app) Facebook scaffolding tool provided by Facebook.
* [`react`](https://github.com/facebook/react) Facebook's development framework facing the V layer.
* [`react-redux`](https://github.com/reactjs/react-redux) state management, and react supporting the use, not a must, but in the business logic is very easy to use.
* [`react-router`](https://github.com/ReactTraining/react-router) for the reactors of reactivity.
* [`antd`](https://ant.design/index-cn) A library library based on` react`s maintained and developed by ants.

## Directory Structure

Briefly describe the directory structure, and some of the files.

`` ``
officeSystem_PC /
  README.md
  package.json
  Node_modules /
  scripts /
  config /
  public /
    index.html
    favicon.ico
  src /
    index.js
    routes.js
    store.js
    actions /
    components /
    sources /
    style /

`` ``

Must fix the named file:

* `public / index.html` html template file.
* `src / index.js` js main entry file.