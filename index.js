'use strict'

// take metadata and remove anything the cli doesnt need to install it.
const keep = [
  'name',
  'dist-tags'
]

const manifestKeep = [
  'name',
  'version',
  'dependencies',
  'optionalDependencies',
  'devDependencies',
  'bundleDependencies',
  'peerDependencies',
  'acceptDependencies',
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

const manifestSets = [
  'versions',
  'policyRestrictions',
  'stagedVersions'
]

const isEmpty = val => {
  return !val ||
    (typeof val === 'object' && Object.keys(val).length === 0)
}

const minifyManifests = (doc, out, type) => {
  if (!doc[type])
    return

  // policyRestrictions and staging have other metadata, and a versions obj
  if (doc[type].versions) {
    out[type] = {}
    Object.keys(doc[type]).filter(k => k !== 'versions').forEach(k => {
      out[type][k] = doc[type][k]
    })
    // ok, now minify the actual manifests on that object.
    return minifyManifests(doc[type], out[type], 'versions')
  }

  // minify all the manifests
  const smallVersions = {}
  Object.keys(doc[type]).forEach(v => {
    const manifest = doc[type][v]
    const smallVersion = {}
    if (manifest.bundledDependencies && !manifest.bundleDependencies) {
      manifest.bundleDependencies = manifest.bundledDependencies
    }
    manifestKeep.forEach(field => {
      if (!isEmpty(manifest[field])) {
        smallVersion[field] = manifest[field]
      }
    })

    if (manifest.scripts && (
        manifest.scripts.preinstall ||
        manifest.scripts.install ||
        manifest.scripts.postinstall)) {
      smallVersion.hasInstallScript = true
    }

    smallVersions[v] = smallVersion
  })

  out[type] = smallVersions
}

module.exports = doc => {
  // not registry metadata
  if (!doc) {
    return false
  }

  const out = {}

  for (let i = 0; i < keep.length; ++i) {
    if (doc[keep[i]] !== undefined) {
      out[keep[i]] = doc[keep[i]]
    }
  }

  manifestSets.forEach(type => minifyManifests(doc, out, type))

  const mtime = (doc.time || {}).modified
  if (mtime) {
    out.modified = mtime
  }

  return out
}
