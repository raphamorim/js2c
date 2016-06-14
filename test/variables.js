var assert = require('assert'),
    js2c = require('../index.js');

var includes = require('../src/header.js');

describe('Variables Tests', function() {
    beforeEach(function() {
        includes.flush();
    })
    context('-> Sample Definitions', function() {
        context('number Definition', function() {
            it('should return string', function(done) {
                var result = js2c.eval("var index = 1");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'int index = 1;\n');
                done();
            });
        });
        context('string Definition', function() {
            it('should return string', function(done) {
                var result = js2c.eval("var name = 'raphael'");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'char name[7] = "raphael";\n');
                done();
            });
        });
        context('boolean Definition', function() {
            it('should return string', function(done) {
                includes.add(['boolean']);
                var code = "var turing = true";
                var result = js2c.eval(code);

                assert.equal(typeof result, 'string');
                code = includes.mount() + 'boolean turing = true;\n';
                assert.deepEqual(result, code);
                done();
            });
        });
        context('String and Number Multiple Definition', function() {
            it('should return string', function(done) {
                var result = js2c.eval("var index = 1, name = 'raphael'");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'int index = 1;\nchar name[7] = "raphael";\n');
                done();
            });
        });
    });
    context('-> String Cases', function() {
        context('native function without arguments', function() {
            it('should return a empty string', function(done) {
                var result = js2c.eval("var str = String()");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'char str[0] = "";\n');
                done();
            });
        });
        context('native function with a valid argument', function() {
            it('should return a valid string', function(done) {
                var result = js2c.eval("var str = String('jack bauer')");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'char str[10] = "jack bauer";\n');
                done();
            });
        });
        context('native function with a invalid argument', function() {
            it('should return a valid string', function(done) {
                var result = js2c.eval("var str = String(null)");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'char str[0] = "";\n');
                done();
            });
        });
        context('native function with a interger argument', function() {
            it('should return a empty string', function(done) {
                var result = js2c.eval("var str = String(12)");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'char str[2] = "12";\n');
                done();
            });
        });
        context('newExpression without arguments', function() {
            it('should return a empty string', function(done) {
                var result = js2c.eval("var str = new String()");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'char str[0] = "";\n');
                done();
            });
        });
        context('newExpression without arguments', function() {
            it('should return a empty string', function(done) {
                var result = js2c.eval("var str = new String()");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'char str[0] = "";\n');
                done();
            });
        });
        context('newExpression with arguments', function() {
            it('should return a valid string', function(done) {
                var result = js2c.eval("var str = new String('annie')");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'char str[5] = "annie";\n');
                done();
            });
        });
    });
    context('-> Number Cases', function() {
        context('native function with a interger argument', function() {
            it('should return a valid int', function(done) {
                var result = js2c.eval("var num = Number(12)");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'int num = 12;\n');
                done();
            });
        });
        context('native function without arguments', function() {
            it('should return a zero as defined int', function(done) {
                var result = js2c.eval("var num = Number()");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'int num = 0;\n');
                done();
            });
        });
        context('native function with a argument which is not a Int', function() {
            it('should return a zero as defined int', function(done) {
                var result = js2c.eval("var num = Number('raphael')");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'int num = 0;\n');
                done();
            });
        });
        context('newExpression without argument', function() {
            it('should return a zero as defined int', function(done) {
                var result = js2c.eval("var num = new Number()");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'int num = 0;\n');
                done();
            });
        });
        context('newExpression with arguments', function() {
            it('should return a valid int', function(done) {
                var result = js2c.eval("var num = new Number(12)");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'int num = 12;\n');
                done();
            });
        });
        context('newExpression with a argument which is not a Int', function() {
            it('should return a zero as defined int', function(done) {
                var result = js2c.eval("var num = new Number('dog')");

                assert.equal(typeof result, 'string');
                assert.deepEqual(result, 'int num = 0;\n');
                done();
            });
        });
    });
    context('-> Boolean Cases', function() {
        context('native function without arguments', function() {
            it('should return false', function(done) {
                includes.add(['boolean']);
                var code = "var bo = Boolean()";
                var result = js2c.eval(code);

                assert.equal(typeof result, 'string');
                code = includes.mount() + 'boolean bo = false;\n';
                assert.deepEqual(result, code);
                done();
            });
        });
        context('native function with a argument which is not a Int and not false', function() {
            it('should return true', function(done) {
                includes.add(['boolean']);
                var code = "var bo = Boolean('dog')";
                var result = js2c.eval(code);

                assert.equal(typeof result, 'string');
                code = includes.mount() + 'boolean bo = true;\n';
                assert.deepEqual(result, code);
                done();
            });
        });
        context('native function with false as argument', function() {
            it('should return false', function(done) {
                includes.add(['boolean']);
                var code = "var bo = Boolean(false)";
                var result = js2c.eval(code);

                assert.equal(typeof result, 'string');
                code = includes.mount() + 'boolean bo = false;\n';
                assert.deepEqual(result, code);
                done();
            });
        });
        context('newExpression without arguments', function() {
            it('should return false', function(done) {
                includes.add(['boolean']);
                var code = "var ba = new Boolean()";
                var result = js2c.eval(code);

                assert.equal(typeof result, 'string');
                code = includes.mount() + 'boolean ba = false;\n';
                assert.deepEqual(result, code);
                done();
            });
        });
        context('newExpression with a argument which is not a Int and not false', function() {
            it('should return true', function(done) {
                includes.add(['boolean']);
                var code = "var ba = new Boolean('dog')";
                var result = js2c.eval(code);

                assert.equal(typeof result, 'string');
                code = includes.mount() + 'boolean ba = true;\n';
                assert.deepEqual(result, code);
                done();
            });
        });
        context('newExpression with false as argument', function() {
            it('should return false', function(done) {
                includes.add(['boolean']);
                var code = "var ba = new Boolean(false)";
                var result = js2c.eval(code);

                assert.equal(typeof result, 'string');
                code = includes.mount() + 'boolean ba = false;\n';
                assert.deepEqual(result, code);
                done();
            });
        });
    });
    context('-> Array Cases', function() {
        context('native definition', function() {
            it('should return array defition', function(done) {
                includes.add(['array']);
                var code = "var arr = [0,1,2,3];";
                var result = js2c.eval(code);

                var array = 'Array arr;\n' + 'insertArray(&arr, 0);\n' +
                    'insertArray(&arr, 1);\n' + 'insertArray(&arr, 2);\n' +
                    'insertArray(&arr, 3);\n';

                assert.equal(typeof result, 'string');
                code = includes.mount() + array;
                assert.deepEqual(result, code);
                done();
            });
        });
        context('native definition', function() {
            it('should return array defition', function(done) {
                includes.add(['array']);
                var code = "var arr = [0,1,2,3];";
                var result = js2c.eval(code);

                var array = 'Array arr;\n' + 'insertArray(&arr, 0);\n' +
                    'insertArray(&arr, 1);\n' + 'insertArray(&arr, 2);\n' +
                    'insertArray(&arr, 3);\n';

                assert.equal(typeof result, 'string');
                code = includes.mount() + array;
                assert.deepEqual(result, code);
                done();
            });
        });
        context('native definition', function() {
            it('should return array defition', function(done) {
                includes.add(['array']);
                var code = "var tips = [ " +
                    "'Click'," + "'AST'," + "'code'," +
                    "'1'," + "'Shift'," + "];";
                var result = js2c.eval(code);

                var array = 'Array tips;\n' + 'insertArray(&tips, "Click");\n' +
                    'insertArray(&tips, "AST");\n' + 'insertArray(&tips, "code");\n' +
                    'insertArray(&tips, 1);\n' + 'insertArray(&tips, "Shift");\n';

                assert.equal(typeof result, 'string');
                code = includes.mount() + array;
                assert.deepEqual(result, code);
                done();
            });
        });
    });
});