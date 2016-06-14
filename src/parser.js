var vm = require('vm'),
    mount = require('./mount');

// Variable Declartions Case
exports.variableDeclaration = function(obj) {
    var str = '',
        deps = [],
        init = obj.init,
        identifier = obj.id.name;

    if (init.type === 'Literal') {
        if (typeof(init.value) === 'string') {
            str = mount.string(identifier, init.value);
        } else if (typeof(init.value) === 'number') {
            str = mount.interger(identifier, init.value);
        } else if (typeof(init.value) === 'boolean') {
            deps.push('boolean');
            str = mount.bool(identifier, init.value);
        }
    }

    if (init.type === 'ArrayExpression') {
        deps.push('array');
        str = mount.array(identifier, init.elements);
    }

    if (init.type === 'NewExpression' ||
        init.type === 'CallExpression') {

        var value = null;
        if (init.arguments.length > 0)
            value = init.arguments[0].value;

        if (init.callee.name === 'Number') {
            str = mount.interger(identifier, value);
        } else if (init.callee.name === 'String') {
            str = mount.string(identifier, value);
        } else if (init.callee.name === 'Boolean') {
            deps.push('boolean');
            str = mount.bool(identifier, value);
        } else if (init.callee.name === 'Array') {
            deps.push('array');
            str = mount.array(identifier, []);
        }
    }

    return {
        stringFormat: str,
        dependencies: deps
    };
}

// Function Declaration Case
exports.functionDeclaration = function(item) {
    var fnName = item.id.name,
        fnBody = item.body.body;

    var fnString = 'void ' + fnName + '()\n{\n';

    return {
        stringFormat: fnString,
        body: fnBody
    }
}