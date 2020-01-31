'use strict'

// take metadata and remove anything the cli doesnt need to install it.
const keep = [
  'versions',
  'name',
  'dist-tags'
]

const versionKeep = [
  'name',
  'version',
  'dependencies',
  'optionalDependencies',
  'devDependencies',
  'bundleDependencies',
  'bundledDependencies',
  'peerDependencies',
  'bin',
  '_hasShrinkwrap',
  'directories',
  'dist',
  'engines',
  'deprecated',
  'peerDependenciesMeta',
  'funding',
  'os',
  'cpu'
]

module.exports = function (doc) {
  // not registry metadata
  if (!doc) return false

  const out = {}

  for (let i = 0; i < keep.length; ++i) {
    if (doc[keep[i]] !== undefined) {
      out[keep[i]] = doc[keep[i]]
    }
  }

  // versions.
  const versions = Object.keys(doc.versions || {})
  const smallVersions = {}
  versions.forEach(function (v) {
    const version = doc.versions[v]
    const smallVersion = {}
    for (let i = 0; i < versionKeep.length; ++i) {
      if (version[versionKeep[i]] !== undefined) {
        smallVersion[versionKeep[i]] = version[versionKeep[i]]
      }
    }
    if (version.scripts && (
        version.scripts.preinstall ||
        version.scripts.install ||
        version.scripts.postinstall)) {
      smallVersion.hasInstallScript = true
    }
    smallVersions[v] = smallVersion
  })

  out.versions = smallVersions

  const mtime = (doc.time || {}).modified
  if (mtime) out.modified = mtime

  return out
}
