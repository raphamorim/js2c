var fs = require('fs');

function Header() {
    var types = [],
    	data = '';

    function putType(dep) {
    	if (types.indexOf(dep) >= 0)
    	 	return;

    	if (dep === 'boolean')
    		data = data.concat('typedef enum { false, true } boolean;\n\n');

    	if (dep === 'array')
    		data += fs.readFileSync('resources/array.c', 'utf8');

    	types.push(dep);
    }

    this.add = function(depedencies) {
    	var self = this;
    	if (!depedencies.length)
    		return;

    	depedencies.forEach((dep) => putType(dep))
    }

    this.mount = function() {
    	if (!data.length)
    		return '';

    	var includes = fs.readFileSync('resources/include.c', 'utf8');
        includes = includes.concat(data);
    	return includes;
    }

    this.flush = function() {
        types = [];
        data = '';
    }
}

module.exports = new Header();
