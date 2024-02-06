const RemVer = require('../classes/remver')
const compare = (a, b, loose) =>
  new RemVer(a, loose).compare(new RemVer(b, loose))

module.exports = compare
