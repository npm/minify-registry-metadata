'use strict'
// count keys in one doc missing from another

module.exports = function (min, doc, objCount, versionCount) {
  count(min, doc, objCount)
  var versions = Object.keys(doc.versions || {})
  for (let i = 0; i < versions.length; ++i) {
    count(min.versions[versions[i]], doc.versions[versions[i]], versionCount)
  }
}

function count (o, orig, countingObject) {
  var keys = Object.keys(orig)
  for (let i = 0; i < keys.length; ++i) {
    if (o[keys[i]] === undefined) {
      if (!countingObject[keys[i]]) {
        countingObject[keys[i]] = 0
      }
      countingObject[keys[i]]++
    }
  }
}
