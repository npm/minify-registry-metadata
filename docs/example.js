var minify = require('./')
var request = require('request')

request.get('https://registry.npmjs.org/lodash', function (err, res, body) {
  if (err) {
    throw err
  }
  var minifiedLodash = minify(JSON.parse(body))
  console.log(minifiedLodash)
})
