const t = require('tap')
const remver = require('../')
const { REMVER_SPEC_VERSION } = require('../internal/constants')

t.match(Object.getOwnPropertyDescriptor(remver, 'REMVER_SPEC_VERSION'), {
  get: undefined,
  set: undefined,
  value: REMVER_SPEC_VERSION,
  configurable: true,
  enumerable: true,
}, 'just a normal value property')
