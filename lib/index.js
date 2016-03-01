/**
 * Modules
 */

var addClass = require('@f/add-class')
var hasClass = require('@f/has-class')
var forEach = require('@f/foreach-obj')
var removeClass = require('@f/remove-class')

/**
 * Expose applyClasses
 */

module.exports = applyClasses

/**
 * applyClasses
 */

function applyClasses (map, element) {
  forEach(function (val, key) {
    val
      ? addClass(key, element)
      : removeClass(key, element)
  }, map)

  return element
}
