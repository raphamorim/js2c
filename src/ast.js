var parser = require('./parser'),
    header = require('./header'),
    indent = require('./utilities').indent,
    util = require('util');

function Ast(body, loadDepedencies) {
  var cString = new String();
  if (!body)
    return;

  for (var i = 0; i < body.length; i++) {
    var item = body[i],
      str = new String();

    if (!item || !item.type) break;

    if (item.type === 'VariableDeclaration') {
      for (var d = 0; d < item.declarations.length; d++) {
        // console.log(util.inspect((item.declarations[d]), false, null));
        var data = parser.variableDeclaration(item.declarations[d]);
        str = str.concat(data.stringFormat);
        header.add(data.dependencies);
      }
    }

    if (item.type === 'FunctionDeclaration') {
      var data = parser.functionDeclaration(item);
      str = str.concat(data.stringFormat);
      str = str.concat(Ast(data.body, false));
      str = str.concat('}\n');
      // console.log(data);
    }

    cString = cString.concat(str);
  }

  var dependencies = String();
  if (loadDepedencies)
    dependencies = header.mount();

  return dependencies.concat(cString);
}

module.exports = Ast;
