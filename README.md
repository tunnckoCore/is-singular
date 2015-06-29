# is-singular [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Return true if given word is in singular form like `apple`, `car`, `test` and false otherwise, never throws.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-singular --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var isSingular = require('is-singular')

isSingular('car')  //=> true
isSingular('cars') //=> false

isSingular(123) //=> false
isSingular({a: 'b'}) //=> false
```


## Related
- [detect-installed](https://github.com/tunnckoCore/detect-installed): Checks that given package name is installed locally (in current… [more](https://github.com/tunnckoCore/detect-installed)
- [is-plural](https://github.com/jonschlinkert/is-plural): Returns true if the given english word is pluralized.
- [is-missing](https://github.com/tunnckocore/is-missing): Check that given `name` or `user/repo` exists in npm registry… [more](https://github.com/tunnckocore/is-missing)
- [is-installed](https://github.com/tunnckoCore/is-installed): Checks that given package is installed on the system -… [more](https://github.com/tunnckoCore/is-installed)
- [is-kindof](https://github.com/tunnckocore/is-kindof): Check type of given javascript value. Support promises, generators, streams,… [more](https://github.com/tunnckocore/is-kindof)
- [is-ansi](https://github.com/tunnckocore/is-ansi): Check that given string contain ANSI color codes, without CLI
- [pluralize](https://github.com/blakeembrey/pluralize): Pluralize and singularize any word


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-singular/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-singular
[npmjs-img]: https://img.shields.io/npm/v/is-singular.svg?label=is-singular

[license-url]: https://github.com/tunnckoCore/is-singular/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-singular
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-singular.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-singular
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-singular.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-singular
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-singular.svg

[david-url]: https://david-dm.org/tunnckoCore/is-singular
[david-img]: https://img.shields.io/david/tunnckoCore/is-singular.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
