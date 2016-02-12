'use strict'

var assert = require('assert-ok')
var array = require('cast-array')
var filter = require('object-filter')
var qs = require('query-string')

module.exports = function mailtoLink (options) {
  assert(options, 'options are required')

  var query = filter({
    to: addresses(options.to),
    cc: addresses(options.cc),
    bcc: addresses(options.bcc),
    su: options.subject,
    body: options.body,
    view: 'cm',
    fs: 1
  }, Boolean)

  return 'https://mail.google.com/mail/?' + qs.stringify(query)
}

function addresses (email) {
  return email ? array(email).join(',') : undefined
}
