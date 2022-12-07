const t = require('tap')
const minify = require('../')
const fs = require('fs')
const path = require('path')
const excluded = function (min, doc, objCount, versionCount) {
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

const runTest = fixture => t => {
  const raw = require(path.resolve(fixture))
  const min = minify(raw)
  t.matchSnapshot(min, 'corgi')
  const objCount = {}
  const versionCount = {}
  if (raw) {
    excluded(min, raw, objCount, versionCount)
    t.matchSnapshot(objCount, 'object diff')
    t.matchSnapshot(versionCount, 'version diff')
  }
  t.end()
}

if (process.argv[2]) {
  runTest(process.argv[2])(t)
} else {
  const fixtures = fs.readdirSync(path.join(__dirname, '/fixtures'))
    .filter(f => /\.js$/.test(f))
    .map(f => 'test/fixtures/' + f)
  t.plan(fixtures.length)
  fixtures.forEach(fixture => t.spawn(process.execPath, [__filename, fixture]))
}
