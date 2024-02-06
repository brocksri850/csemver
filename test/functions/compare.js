const { test } = require('tap')
const compare = require('../../functions/compare.js')
const comparisons = require('../fixtures/comparisons.js')
const equality = require('../fixtures/equality.js')
const RemVer = require('../../classes/remver.js')

test('comparison tests', t => {
  t.plan(comparisons.length)
  comparisons.forEach(([v0, v1, loose]) => t.test(`${v0} ${v1} ${loose}`, t => {
    t.plan(4)
    t.equal(compare(v0, v1, loose), 1, `compare('${v0}', '${v1}')`)
    t.equal(compare(v1, v0, loose), -1, `compare('${v1}', '${v0}')`)
    t.equal(compare(v0, v0, loose), 0, `compare('${v0}', '${v0}')`)
    t.equal(compare(v1, v1, loose), 0, `compare('${v1}', '${v1}')`)
  }))
})

test('equality tests', (t) => {
  // [version1, version2]
  // version1 should be equivalent to version2
  t.plan(equality.length)
  equality.forEach(([v0, v1, loose]) => t.test(`${v0} ${v1} ${loose}`, t => {
    t.plan(5)
    t.equal(compare(v0, v1, loose), 0, `${v0} ${v1}`)
    t.equal(compare(v1, v0, loose), 0, `${v1} ${v0}`)
    t.equal(compare(v0, v0, loose), 0, `${v0} ${v0}`)
    t.equal(compare(v1, v1, loose), 0, `${v1} ${v1}`)

    // also test with an object. they are === because obj.version matches
    t.equal(compare(new RemVer(v0, { loose: loose }),
      new RemVer(v1, { loose: loose })), 0,
    `compare(${v0}, ${v1}) object`)
  }))
  t.end()
})
