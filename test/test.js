const t = require('tap')
const minify = require('../')
const excluded = require('../excluded.js')
const fs = require('fs')
const path = require('path')

const fixtures = fs.readdirSync(__dirname + '/fixtures')
  .filter(f => /\.json$/.test(f))
  .map(f => __dirname + '/fixtures/' + f)

t.test('minify all fixtures', t => {
  t.plan(fixtures.length)
  fixtures.forEach(fixture => t.test(path.basename(fixture), t => {
    const raw = require(fixture)
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
  }))
})
