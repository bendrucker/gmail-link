'use strict'

var test = require('tape')
var gmail = require('./')

test(function (t) {
  t.equal(gmail({to: 'bvdrucker@gmail.com'}), 'https://mail.google.com/mail/?fs=1&to=bvdrucker%40gmail.com&view=cm')
  t.equal(gmail({to: ['bvdrucker@gmail.com', 'bdrucker@eazeup.com']}), 'https://mail.google.com/mail/?fs=1&to=bvdrucker%40gmail.com%2Cbdrucker%40eazeup.com&view=cm')
  t.equal(gmail({to: 'bvdrucker@gmail.com', subject: 'Hello world'}), 'https://mail.google.com/mail/?fs=1&su=Hello%20world&to=bvdrucker%40gmail.com&view=cm')
  t.end()
})
