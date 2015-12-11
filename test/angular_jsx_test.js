'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.angular_jsx = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  should_ignore_non_templates: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/should-ignore-non-templates.js');
    var expected = grunt.file.read('test/expected/should-ignore-non-templates.js');
    test.equal(actual, expected, 'should ignore non templates.');

    test.done();
  },
  should_replace_jsx_tpls: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/should-replace-jsx-tpls.js');
    var expected = grunt.file.read('test/expected/should-replace-jsx-tpls.js');
    test.equal(actual, expected, 'should replace jsx templates.');

    test.done();
  },
};
