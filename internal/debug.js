const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bremver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('REMVER', ...args)
  : () => {}

module.exports = debug
