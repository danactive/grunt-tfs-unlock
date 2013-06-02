'use strict';

var grunt = require('grunt'),
tfs = require('./../node_modules/tfs-unlock/tfs-unlock.js');

// Nodeunit will run any exported functions as unit tests.
exports["tfs-unlock"] = function (test) {
	test.ok(tfs, 'Require tfs-unlock.js dependency');

	test.ok(tfs.vs2010.bit32, 'Path to Visual Studio 2010 32-bit');
	test.ok(tfs.vs2010.bit64, 'Path to Visual Studio 2010 64-bit');
	test.ok(tfs.vs2012.bit32, 'Path to Visual Studio 2012 32-bit');
	test.ok(tfs.vs2012.bit64, 'Path to Visual Studio 2012 64-bit');

	test.done();
};

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