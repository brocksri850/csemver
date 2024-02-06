const RemVer = require('../classes/remver')
const minor = (a, loose) => new RemVer(a, loose).minor
module.exports = minor
