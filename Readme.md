
# apply-classes

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Apply classes to an element from an object map

## Installation

    $ npm install @f/apply-classes

## Usage

```js
var applyClasses = require('@f/apply-classes')

applyClasses({
  show: true,
  hide: false
})
```

## API

### applyClasses(map, element)

- `map` - An object containing class names as keys and boolean values indicating whether they should be added or removed.
- `element` - The DOM node you want to apply the class name operations in `map` to.

**Returns:** `element`

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/apply-classes.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/apply-classes
[git-image]: https://img.shields.io/github/tag/micro-js/apply-classes.svg?style=flat-square
[git-url]: https://github.com/micro-js/apply-classes
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/apply-classes.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/apply-classes
