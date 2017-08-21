2048（PC版本）。
[English version](https://github.com/minhLake/2048/blob/master/README_EN.md)

## 目录

- [技术栈](#技术栈)
- [目录结构](#目录结构)

## 技术栈

开发中需要用的主要技术，和相关工具：

* [`npm`](https://www.npmjs.com/) NodeJS 中自带的包管理工具。
* [`yarn`](https://yarnpkg.com/lang/en/) NodeJS 第二代的包管理工具。
* [`webpack`](https://github.com/webpack/webpack) 目前功能最为强大的模块打包工具。
* [`create-react-app`](https://github.com/facebookincubator/create-react-app) Facebook官方为 react 提供的脚手架工具。
* [`react`](https://github.com/facebook/react) Facebook 旗下的一款面对V层的开发框架。
* [`react-redux`](https://github.com/reactjs/react-redux) 状态管理，与react配套使用，并不是必须品，但是在业务逻辑复杂时十分好用。
* [`react-router`](https://github.com/ReactTraining/react-router) 针对react的路由选择器。
* [`antd`](https://ant.design/index-cn) 由蚂蚁金服维护和开发的一款基于`react`的UI库。

## 目录结构

简要介绍目录结构，和其中部分文件。

```
OfficeSystem_PC/
  README.md
  package.json
  node_modules/
  scripts/
  config/
  public/
    index.html
    favicon.ico
  src/
    index.js
    routes.js
    store.js
    actions/
    components/
    sources/
    style/

```

必须固定命名的文件：

* `public/index.html` html 模板文件。
* `src/index.js` js 主入口文件。