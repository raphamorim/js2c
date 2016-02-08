var vm = require('vm'),
    mount = require('./mount');

// Variable Declartions Case
exports.variable = function(obj) {
    var str = '';
    var deps = [];
    var init = obj.init,
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
        }
    }

    return {
        stringFormat: str,
        dependencies: deps
    };
}