# js2c - JavaScript to C

### WORK IN PROGRESS, BUT [YOU CAN HELP](https://github.com/raphamorim/js2c/issues)

> Transform JavaScript in C

[![Coverage Status](https://coveralls.io/repos/github/raphamorim/js2c/badge.svg?branch=master)](https://coveralls.io/github/raphamorim/js2c?branch=master) [![Build Status](https://travis-ci.org/raphamorim/js2c.svg)](https://travis-ci.org/raphamorim/js2c.js)

## Summary

- [Why js2c?](#why)
- [Getting](#getting)
- [Usage](#usage)
  - [Simple Usage](#simple-usage)
  - [Methods](#methods)
    - [Parse](#parse)
    - [Compile](#compile)
    - [Exec](#exec)
  - [Notes](#notes)
- [Roadmap](#roadmap)

## Why?

...And why not?

## Getting

Verify if you have [node](https://nodejs.org/en/) and [npm](https://www.npmjs.org/) installed.

```shell
npm install js2c
```

## Usage

### Simple Usage

Then do the Magic.

```javascript

var js2c = require("js2c"),
    jsString = " function sum(a, b){  console.log(a + b) } ";

var program = js2c(jsString); // returns "void sum(int x, int y) { printf("%d ", x + y); }"
program.exec(); // Compile String as a C program and Execute Binary

```

### Methods

About js2c Methods:

#### Parse

Return parsed strings without modify/save in JS2C state

```js

var js2c = require("js2c");

js2c.parse("var i = 1"); // returns "int i = 1;"

```

#### Compile

Compile current program, however you can specify the path where compiled program will be stored.

```js

var js2c = require("js2c"),
    program = js2c(jsCode);

var path = "./bin";

c.compile(path); // path is optional

```

#### Exec

Create binary file in memory and execute after it.

```js

var js2c = require("js2c"),
    program = js2c(jsCode);

c.exec();

```

### Notes

IMPORTANT: **For you while you have to define values in variable before use it.**

## Roadmap

- [ ] Variable declarations
  - [x] string
  - [x] interger
  - [x] boolean
  - [x] array
  - [ ] object
- [ ] Functions declarations
- [ ] Native Funcs/Methods (`console`, `import`, `while`, `for`, `Array.length`and much others...)
- [ ] Modules declarations (import cases)
