/*!
 * is-singular <https://github.com/tunnckoCore/is-singular>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isSingular = require('./index')

test('is-singular:', function () {
  test('should return true if word is in singular form, like `apple`', function (done) {
    test.equal(isSingular('apple'), true)
    test.equal(isSingular('test'), true)
    test.equal(isSingular('car'), true)
    done()
  })
  test('should return false if word not in single form like `apples`', function (done) {
    test.equal(isSingular('apples'), false)
    test.equal(isSingular('tests'), false)
    test.equal(isSingular('cars'), false)
    done()
  })
  test('should return false if not a string given', function (done) {
    test.equal(isSingular(123), false)
    test.equal(isSingular([1, 2]), false)
    test.equal(isSingular({ a: 'b' }), false)
    done()
  })
})
