# Welcome to `gy-init`

<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
</p>

`gy-init` is a small, no dependencies tool that initializes an Expo managed TypeScript React Native application with Redux and React Navigation pre-configured.

## Prerequisites

***Use other versions at own risk***

* node >=16.13.0

* yarn >=1.22.17

* expo-cli >=4.12.1

## Installation

***assuming node.js is installed on your machine***

### Install from source

```sh
git clone https://github.com/Graveyard-Shift/gy-init
```

```sh
cd gy-init

yarn build
```

```sh
npm i -g
```

## Usage

```sh
gy-init MyApp
```

The `gy-init` command takes in one argument; the name of the Expo app being generated. This argument will be passed into the call to `expo init`, meaning a directory with the same name will be created in the current working directory. This directory is your app, and the boilerplate will be written into the same directory.

Running the `gy-init` command will generate the initial project structure and install the necessary dependencies:

```
MyApp
├── .expo-shared
├── assets
├── node_modules
├── src
|   ├── app
|   |   ├── hooks
|   |   |   └── redux
|   |   |       └── index.ts
|   |   ├── reducers
|   |   |   └── dummy
|   |   |       └── index.ts
|   |   └── store
|   |       └── index.ts
|   ├── components
|   |   └── Goodluck
|   |       └── index.tsx
|   ├── navigationStack
|   |   └── index.tsx
|   ├── screens
|   |   └── Home
|   |       └── index.tsx
|   └── styles
|       └── index.ts
├── .gitignore
├── app.json
├── App.tsx
├── babel.config.js
├── package.json
├── tsconfig.json
└── yarn.lock
```

Once it's finished...

```sh
cd MyApp

yarn start
```

Happy hacking.

## Author

👤 **The GYS Authors**

* Github: [@sntsabode](https://github.com/Graveyard-Shift)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
