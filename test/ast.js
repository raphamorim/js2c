var assert = require('assert'),
    js2c = require('../index.js');

describe('Basic AST tests', function() {
   context('Evaluating JS valid code', function() {
        it('should return string', function(done) {
            var result = js2c.eval("console.log(1)");

            assert.equal(typeof result, 'string');
            assert.deepEqual(result, 'printf(1);');
            done();
        });
   });
});


