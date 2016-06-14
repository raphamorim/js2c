/*!
 * js2c
 *
 * Copyright Raphael Amorim 2016
 * Released under the GPL-3.0 license
 * https://github.com/raphamorim
 */

var parseJS = require('babel-core').parse;

var fs = require('fs'),
  astLector = require('./src/ast');

var cData = new String();

function Js2c() {
  function evaluate(data) {
    var ast = parseJS(data),
      body = ast.body;

    var data = astLector(ast.body, true);
    return data;

    // TO DEBUG
    // console.log(util.inspect((body), false, null));
  }

  this.eval = evaluate;
}

var js2c = new Js2c();
module.exports = js2c;

// TO DEBUG
var jsData = fs.readFileSync('test/fixtures/es5.sample.js', 'utf8');
console.log(js2c.eval(jsData));