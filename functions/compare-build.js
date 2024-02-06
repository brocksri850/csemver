const RemVer = require('../classes/remver')
const compareBuild = (a, b, loose) => {
  const versionA = new RemVer(a, loose)
  const versionB = new RemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}
module.exports = compareBuild
