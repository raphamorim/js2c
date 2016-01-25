
// Variable Declartions Case
exports.variable = function(obj) {
    var str = new String();
    var init = obj.init,
        id = obj.id;

    if (init.type === "Literal") {
        if (typeof(init.value) === "string")
            str = 'char ' + id.name + '[' + (++init.value.length) + 
                '] = "' + init.value + '";\n'
        
        else if (typeof(init.value) === "number")
            str = 'int ' + id.name + ' = ' + init.value + ';\n';
    }

    return str;
}