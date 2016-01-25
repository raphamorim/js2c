# js2c

> Transform JavaScript in C

Verify if you have [node](https://nodejs.org/en/) and [npm](https://www.npmjs.org/) installed.

```shell
npm install js2c
```

Then do the Magic.

```javascript

var js2c = require("js2c"),
    jsString = " function sum(a, b){  console.log(a + b) } ";

var c = js2c(jsString); // "void sum(int x, int y) { printf("%d ", x + y);}" 

```
