# gmail-link [![Build Status](https://travis-ci.org/bendrucker/gmail-link.svg?branch=master)](https://travis-ci.org/bendrucker/gmail-link)

> Generate a Gmail compose link


## Install

```
$ npm install --save gmail-link
```


## Usage

```js
var gmailLink = require('mailto-link')

gmailLink({to: 'bvdrucker@gmail', subject: 'Nice mailto lib'})
//=> https://mail.google.com/mail/?fs=1&su=Nice%20gmail%20lib&to=bvdrucker%40gmail.com&view=cm
```

## API

#### `gmailLink(options)` -> `string`

##### options

*Required*  
Type: `object`

###### to / cc / bcc

Type: `string` / `array[string]`

List of emails to send to.

###### subject

Type: `string`

The email subject.

###### body

Type: `string`

The email body.


## License

MIT © [Ben Drucker](http://bendrucker.me)
