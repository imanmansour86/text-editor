![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![lang](https://img.shields.io/github/languages/top/imanmansour86/text-editor)
![repo size](https://img.shields.io/github/repo-size/imanmansour86/text-editor)
![last commit](https://img.shields.io/github/last-commit/imanmansour86/text-editor)

# Text Editor

## Table of Contents

- [Text Editor](#text-editor)
  - [Table of Contents](#table-of-contents)
  - [Deployed app](#deployed-app)
  - [Demo](#demo)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Built With](#built-with)
  - [Author](#author)
  - [License](#license)

## Deployed app

[Deployed](https://infinite-beyond-80277.herokuapp.com/)

## Demo

![demo](/images/J.A.T.E.gif)

## Description

A Progressive Web Application (PWA) text editor that runs in the browser. Features several data persistence techniques and ability to function offline. Built using IndexedDB, service worker with workbox and WebpackPwaManifest plugin

## Installation

- Go to the app's [repo](https://github.com/imanmansour86/text-editor) in github and clone the app

- From terminal: navigate to app's directoty and run:

  ```md
  $ npm install
  ```

- To invoke the app from terminal, run:

  ```md
  $ npm run start
  ```

## Usage

This app is bundled with webpck and allows users to create notes or code snippets with or without an internet connection. It uses service worker with workbox that caches static assets and uses babel as well. It uses IndexedDB to create an object store and includes both GET and PUT methods. It automatically saves content inside the text editor when the DOM window is unfocused. The app can also be installed as a web application

## Features

Manifest.json file

![manifest](/images/manifest.png)

Registered service worker

![service](/images/service.png)

IndexedDB storage

![db](/images/db.png)

## Built With

[webpack-pwa-manifest](https://www.npmjs.com/package/webpack-pwa-manifest)

[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

## Author

Iman Mansour

- [Portfolio](https://imanmansour86.github.io/new-portfolio/)
- [Github](https://github.com/imanmansour86)
- [LinkedIn](https://www.linkedin.com/in/iman-mansour-51391515/)
- [Email](mailto:imanmansour86@gmail.com)

## License

This project is licensed under the MIT License
