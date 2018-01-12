# Code Assignment
This repository contains a code assignment. The compiled results can be viewed [here](https://mobiushorizons.github.io/code_assignment_1/).

## Build environment:

Dependencies are managed in `npm`. 

```sh
npm install
```
or with `yarn`

```sh
yarn
```

## Build Instructions:
Code is built using `webpack`, and can be run with npm scripts.

For development:
```sh
npm  run start # or
yarn run start # if you prefer yarn 
```

For production builds:
```sh
npm  run build # or
yarn run build # if your prefer yarn
```

## tests

Tests are written with `mocha` and can be run with npm scripts.

```sh
npm  run test # or
yarn run test # if you prefer yarn
```

## environment setup

### Editorconfig
This repository has an [editorconfig](http://editorconfig.org/) file set up so that editor settings 
can be consistent. If you don't have the editorconfig plugin installed for you editor, you can 
automatically have `eclint` check the source files by calling:

```sh
npm  run eclint # or
yarn run eclint # if you prefer yarn
```

if you want to have the issues automatically fixed, run:

```sh
npm  run eclint:fix # or
yarn run eclint:fix # if you prefer yarn
```

### Eslint
This repository has [eslint](https://eslint.org/) set up for linting the javascript source files.
The webpack build automatically calls the linter, but you can manually invoke it using npm scripts:

```sh
npm  run eslint # or
yarn run eslint # if you prefer yarn
```
