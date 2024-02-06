const RemVer = require('../classes/remver')
const patch = (a, loose) => new RemVer(a, loose).patch
module.exports = patch
