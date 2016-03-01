/**
 * Imports
 */

var hasClass = require('@f/has-class')
var applyClasses = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var node = $('<div class="test"></div>')

  applyClasses({test: false, asdf: true}, node)

  t.ok(hasClass('asdf', node))
  t.notOk(hasClass('test', node))

  t.end()
})

/**
 * Helpers
 */

function $ (html) {
  document.body.innerHTML = html
  return document.body.firstChild
}
