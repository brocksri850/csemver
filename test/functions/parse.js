const t = require('tap')
const parse = require('../../functions/parse')
const RemVer = require('../../classes/remver')
const invalidVersions = require('../fixtures/invalid-versions')

t.test('returns null instead of throwing when presented with garbage', t => {
  t.plan(invalidVersions.length)
  invalidVersions.forEach(([v, msg, opts]) =>
    t.equal(parse(v, opts), null, msg))
})

t.test('throw errors if asked to', t => {
  t.throws(() => {
    parse('bad', null, true)
  }, {
    name: 'TypeError',
    message: 'Invalid Version: bad',
  })
  t.throws(() => {
    parse([], null, true)
  }, {
    name: 'TypeError',
    message: 'Invalid version. Must be a string. Got type "object".',
  })
  t.end()
})

t.test('parse a version into a RemVer object', t => {
  t.match(parse('1.2.3'), new RemVer('1.2.3'))
  const s = new RemVer('4.5.6')
  t.equal(parse(s), s, 'just return it if its a RemVer obj')
  const loose = new RemVer('4.2.0', { loose: true })
  t.match(parse('4.2.0', true), loose, 'looseness as a boolean')
  t.match(parse('4.2.0', { loose: true }), loose, 'looseness as an option')
  t.end()
})
