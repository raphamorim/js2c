exports.indent = function(level, codeString) {
	var arrCode = codeString.split('\n'),
		indentedCode = '';

	for (var i = 0; i < arrCode.length; i++) {
		indentedCode += (' '.repeat(2) + arrCode[i]) + '\n';
	}

	return indentedCode;
}