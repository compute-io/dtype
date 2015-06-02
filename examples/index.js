'use strict';

var dtype = require( './../lib' );

console.log( dtype( null ) );
// returns 'null'

console.log( dtype( undefined ) );
// returns 'undefined'

console.log( dtype( true ) );
// returns 'boolean'

console.log( dtype( Math.PI ) );
// returns 'number'

console.log( dtype( 'beep' ) );
// returns 'string'

console.log( dtype( function beep(){} ) );
// returns 'function'

console.log( dtype( new Int8Array( 10 ) ) );
// returns 'int8'

console.log( dtype( new Float64Array( 20 ) ) );
// returns 'float64'

console.log( dtype( new Buffer( 'woot' ) ) );
// returns 'binary'

console.log( dtype( [] ) );
// returns 'generic'

console.log( dtype( {} ) );
// returns 'generic'
