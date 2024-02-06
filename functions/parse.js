const RemVer = require('../classes/remver')
const parse = (version, options, throwErrors = false) => {
  if (version instanceof RemVer) {
    return version
  }
  try {
    return new RemVer(version, options)
  } catch (er) {
    if (!throwErrors) {
      return null
    }
    throw er
  }
}

module.exports = parse
