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

        return 'bool ' + identifier + ' = ' + value + ';\n';
    }

    this.interger = function(identifier, value) {
        value = (typeof(value) === 'number')? value : 0;

        return 'int ' + identifier + ' = ' + value + ';\n';
    }
}

module.exports = new Mount();