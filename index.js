/*!
 * js2c
 *
 * Copyright Raphael Amorim 2016
 * Released under the GPL-3.0 license
 * https://github.com/raphamorim
 */

var parseJS = require('babel-core').parse;

function Js2c() {
  function evaluate(data) {
    var ASTjs = parseJS(data);
    return ASTjs;
  }

  this.eval = evaluate;
}

var js2c = new Js2c();
module.exports = js2c;

console.log(js2c.eval("console.log(1);"));