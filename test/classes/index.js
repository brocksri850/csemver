const t = require('tap')
t.same(require('../../classes'), {
  RemVer: require('../../classes/remver'),
  Range: require('../../classes/range'),
  Comparator: require('../../classes/comparator'),
}, 'export all classes at remver/classes')
