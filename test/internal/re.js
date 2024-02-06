const { test } = require('tap')
const { src, re, safeRe } = require('../../internal/re')
const remver = require('../../')

test('has a list of src, re, and tokens', (t) => {
  t.match(Object.assign({}, remver), {
    src: Array,
    re: Array,
    tokens: Object,
  })
  re.forEach(r => t.match(r, RegExp, 'regexps are regexps'))
  src.forEach(s => t.match(s, String, 'src is strings'))
  for (const i in remver.tokens) {
    t.match(remver.tokens[i], Number, 'tokens are numbers')
  }

  safeRe.forEach(r => {
    t.notMatch(r.source, '\\s+', 'safe regex do not contain greedy whitespace')
    t.notMatch(r.source, '\\s*', 'safe regex do not contain greedy whitespace')
  })

  t.end()
})
