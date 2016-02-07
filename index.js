/*!
 * js2c
 *
 * Copyright Raphael Amorim 2016
 * Released under the GPL-3.0 license
 * https://github.com/raphamorim
 */

var parseJS = require('babel-core').parse;

var fs = require('fs'),
  util = require('util'),
  parser = require('./src/parser'),
  header = require('./src/header'),
  jsData = fs.readFileSync('test/fixtures/es5.sample.js', 'utf8');

var cData = new String();

function Js2c() {
  function evaluate(data) {
    var ast = parseJS(data),
      body = ast.body;

    // console.log(util.inspect((body), false, null));
    return read(body);
  }

  function read(body) {
    var cString = new String();

    for (var i = 0; i < body.length; i++) {
      var item = body[i],
        str = new String();

      if (!item || !item.type) break;

      if (item.type === 'VariableDeclaration') {
        for (var d = 0; d < item.declarations.length; d++) {
          // console.log(util.inspect((item.declarations[d]), false, null));
          str = str.concat(parser.variable(item.declarations[d]));
        }
      }

      cString = cString.concat(str);
    }

    return cString;
  }

  this.eval = evaluate;
}

var js2c = new Js2c();
module.exports = js2c;

// console.log(js2c.eval(jsData));