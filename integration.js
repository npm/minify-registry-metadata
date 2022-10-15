
var changes = require('concurrent-couch-follower')
var normalize = require('normalize-registry-metadata')
var minify = require('./')
var excluded = require('./excluded')
var fs = require('fs')
var count

var configOptions = {
  db: 'https://replicate.npmjs.com/registry',
  include_docs: true,
  since: 0,
  sequence: function (seq, cb) {
    setImmediate(cb)
  },
  concurrency: 5,
}

var max = 0
var maxName = ''

var saved = 0
var size = 0

var start = Date.now()
var docs = 0

var countObj = {}
var versionCountObj = {}

changes(function (data, done) {
  docs++
  var doc = normalize(data.doc)
  var min = minify(doc)
  if (doc) {
    // excluded(min,doc,countObj,versionCountObj)

    var sdoc = JSON.stringify(doc)
    var smin = JSON.stringify(min)
    var diff = sdoc.length - smin.length
    saved += sdoc.length - smin.length
    size += smin.length

    // console.log(diff+'\t'+saved)
  }

  if (data.seq >= 997485) {
    console.log('finished')
    report()

    // fs.writeFileSync('./excluded.json',JSON.stringify({doc:countObj,version:versionCountObj},null,'  ')+"\n")
    process.exit()
  }

  done()
}, configOptions)

setInterval(report, 5000)

function report () {
  console.log('docs: ', docs)
  console.log('saved: ', saved)
  console.log('min doc size:', size)
  var total = Date.now() - start
  console.log('elapsed: ', total, '\n')
}
