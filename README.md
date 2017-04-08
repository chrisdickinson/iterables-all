# @iterables/all

Return true if all elements of an iterable match.

```javascript
const all = require('@iterables/all')

all('abc', xs => xs === 'c') // false
all('ccc', xs => xs === 'c') // true
all([null, false, '']) // false
all([true, {}]) // true
```

## Installation

```
$ npm install --save @iterables/all
```

## API

### `all(iterable, test = Boolean) -> Iterator`

* `iterable`: an `Iterator` — a generator instance, `Array`, `Map`, `String`, or `Set`
* `test`: A function taking `xs` and returning a boolean value.

Returns `true` if all elements matched `test`, or `false` if any element failed.

Stops consuming elements from `iterable` as soon as they fail `test`.

## License

MIT
