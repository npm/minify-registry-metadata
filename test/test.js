const t = require('tap')
const minify = require('../')
const excluded = require('../excluded.js')
const fs = require('fs')
const path = require('path')

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
  const fixtures = fs.readdirSync(__dirname + '/fixtures')
    .filter(f => /\.js$/.test(f))
    .map(f => 'test/fixtures/' + f)
  t.plan(fixtures.length)
  fixtures.forEach(fixture => t.spawn(process.execPath, [__filename, fixture]))
}
