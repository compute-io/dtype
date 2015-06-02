dtype
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Determines the underlying data type of an input value.


## Installation

``` bash
$ npm install compute-dtype
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var dtype = require( 'compute-dtype' );
```

#### dtype( value )

Determines the underlying data type of an input `value`.

``` javascript
var dt = dtype( Int16Array( 10 ) );
// returns 'int16'

dt = dtype( true );
// returns 'boolean'
```

The following input values are supported:

| Value | Data Type |
|:------|:------------|
| [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) | undefined |
| [`null`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) | null |
| [`true|false`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) | boolean |
| [`<number>`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) | number |
| [`<string>`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) | string |
| [`<symbol>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) | symbol |
| [`<function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | function |
| [`Buffer`](https://nodejs.org/api/buffer.html) | binary |
| [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) | binary |
| [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array) | int8 | 
| [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) | uint8 | 
| [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) | uint8_clamped |
| [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array) | int16 |
| [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array) | uint16 |
| [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) | int32 |
| [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array) | uint32 |
| [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) | float32 |
| [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array) | float64 |
| [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | generic |
| Other | generic |


__Note__: values created using `String`, `Boolean`, and `Number` constructors are `Objects` and considered `generic`.




## Examples

``` javascript
var dtype = require( 'compute-dtype' );

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

console.log( dtype( new String( 'beep' ) ) );
// returns 'generic'

console.log( dtype( new Boolean( true ) ) );
// returns 'generic'

console.log( dtype( new Number( 5 ) ) );
// returns 'generic'
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/compute-dtype.svg
[npm-url]: https://npmjs.org/package/compute-dtype

[travis-image]: http://img.shields.io/travis/compute-io/dtype/master.svg
[travis-url]: https://travis-ci.org/compute-io/dtype

[coveralls-image]: https://img.shields.io/coveralls/compute-io/dtype/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/dtype?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/dtype.svg
[dependencies-url]: https://david-dm.org/compute-io/dtype

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/dtype.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/dtype

[github-issues-image]: http://img.shields.io/github/issues/compute-io/dtype.svg
[github-issues-url]: https://github.com/compute-io/dtype/issues
