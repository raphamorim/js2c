function Mount() {
    this.string = function(identifier, value) {
        if (value)
            value = (typeof(String(value)) == 'string')? String(value): '';
        else
            value = ''

        return 'char ' + identifier + '[' +
            value.length + '] = "' + value + '";\n';
    }

    this.bool = function(identifier, value) {
        value = (value)? Boolean(value) : false;

        return 'boolean ' + identifier + ' = ' + value + ';\n';
    }

    this.interger = function(identifier, value) {
        value = (typeof(value) === 'number')? value : 0;

        return 'int ' + identifier + ' = ' + value + ';\n';
    }

    this.array = function(identifier, elements) {
        var str = 'Array ' + identifier + ';\n';
        for (var i = 0; i < elements.length; i++) {
            var value = (isNaN(elements[i].value)) ? '"' + elements[i].value + '"' : elements[i].value;
            str += 'insertArray(&' + identifier + ', ' + value + ');\n';
        }

        return str;
    }
}

module.exports = new Mount();