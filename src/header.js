function Header() {
    var types = [],
    	data = '';

    function putType(dep) {
    	if (types.indexOf(dep) >= 0) {
    	 	return;
    	}

    	if (dep === 'boolean')
    		data = data.concat('typedef enum { false, true } boolean;\n');

    	types.push(dep);
    }

    this.add = function(depedencies) {
    	var self = this;
    	if (!depedencies.length)
    		return;

    	depedencies.forEach((dep) => putType(dep))
    }

    this.mount = function() {
    	return data;
    }
}

var header = new Header();
module.exports = header;
