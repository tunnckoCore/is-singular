/*!
 * is-singular <https://github.com/tunnckoCore/is-singular>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var pluralize = require('pluralize')

module.exports = function isSingular (word) {
  if (typeof word !== 'string') {
    return false
  }

  return pluralize.isSingular(word)
};
