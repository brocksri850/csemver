const RemVer = require('../classes/remver')

const inc = (version, release, options, identifier, identifierBase) => {
  if (typeof (options) === 'string') {
    identifierBase = identifier
    identifier = options
    options = undefined
  }

  try {
    return new RemVer(
      version instanceof RemVer ? version.version : version,
      options
    ).inc(release, identifier, identifierBase).version
  } catch (er) {
    return null
  }
}
module.exports = inc
