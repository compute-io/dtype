/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	dtype = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-dtype', function tests() {

	it( 'should export a function', function test() {
		expect( dtype ).to.be.a( 'function' );
	});

	it( 'should return underlying data types', function test() {
		// Null:
		assert.strictEqual( dtype( null ), 'null', 'null' );

		// Undefined:
		assert.strictEqual( dtype( undefined ), 'undefined', 'undefined' );

		// Boolean:
		assert.strictEqual( dtype( true ), 'boolean', 'true' );
		assert.strictEqual( dtype( false ), 'boolean', 'false' );

		// Number:
		assert.strictEqual( dtype( 5 ), 'number', 'number' );

		// String:
		assert.strictEqual( dtype( 'beep' ), 'string', 'beep' );

		// Function:
		assert.strictEqual( dtype( function(){} ), 'function', 'function' );

		// Buffer:
		assert.strictEqual( dtype( new Buffer(10) ), 'binary', 'Buffer' );

		// Typed Arrays:
		assert.strictEqual( dtype( new Int8Array(10) ), 'int8', 'Int8Array' );
		assert.strictEqual( dtype( new Uint8Array(10) ), 'uint8', 'Uint8Array' );
		assert.strictEqual( dtype( new Uint8ClampedArray(10) ), 'uint8_clamped', 'Uint8ClampedArray' );
		assert.strictEqual( dtype( new Int16Array(10) ), 'int16', 'Int16Array' );
		assert.strictEqual( dtype( new Uint16Array(10) ), 'uint16', 'Uint16Array' );
		assert.strictEqual( dtype( new Int32Array(10) ), 'int32', 'Int32Array' );
		assert.strictEqual( dtype( new Uint32Array(10) ), 'uint32', 'Uint32Array' );
		assert.strictEqual( dtype( new Float32Array(10) ), 'float32', 'Float32Array' );
		assert.strictEqual( dtype( new Float64Array(10) ), 'float64', 'Float64Array' );

		// Generic:
		assert.strictEqual( dtype( [] ), 'generic', 'Array' );
		assert.strictEqual( dtype( {} ), 'generic', 'Object' );
		assert.strictEqual( dtype( new String( 'beep' ) ), 'generic', 'new String' );
		assert.strictEqual( dtype( new Boolean( true ) ), 'generic', 'new Boolean' );
		assert.strictEqual( dtype( new Number( 5 ) ), 'generic', 'new Number' );
		assert.strictEqual( dtype( new Beep() ), 'generic', 'Class instance' );

		function Beep() {
			return this;
		}
	});

});
