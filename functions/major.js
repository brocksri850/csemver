const RemVer = require('../classes/remver')
const major = (a, loose) => new RemVer(a, loose).major
module.exports = major
