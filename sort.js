var excluded = require('./excluded.json')

var keys = Object.keys(excluded.version)

keys.sort(function (k1, k2) {
  if (excluded.version[k1] > excluded.version[k2]) {
    return -1
  } else if (excluded.version[k1] < excluded.version[k2]) {
    return 1
  } else {
    return 0
  }
})

keys.forEach(function (k) {
  if (excluded.version[k] < 100) {
    return
  }
  console.log(k + '\n  ' + excluded.version[k])
})
