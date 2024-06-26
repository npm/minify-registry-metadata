module.exports = {
  _id: 'tap',
  _rev: '448-070ce2407c126507f35d3256848585d9',
  name: 'tap',
  description: 'A Test-Anything-Protocol library for JavaScript',
  'dist-tags': {
    latest: '14.10.1',
    next: '13.0.0-rc.30',
    legacy: '12.7.0',
  },
  versions: {
    '14.10.1': {
      name: 'tap',
      version: '14.10.1',
      author: {
        name: 'Isaac Z. Schlueter',
        email: 'i@izs.me',
        url: 'http://blog.izs.me',
      },
      description: 'A Test-Anything-Protocol library for JavaScript',
      homepage: 'http://www.node-tap.org/',
      bin: {
        tap: 'bin/run.js',
      },
      main: 'lib/tap.js',
      engines: {
        node: '>=8',
      },
      dependencies: {
        'async-hook-domain': '^1.1.2',
        'bind-obj-methods': '^2.0.0',
        'browser-process-hrtime': '^1.0.0',
        chokidar: '^3.0.2',
        'color-support': '^1.1.0',
        coveralls: '^3.0.6',
        diff: '^4.0.1',
        esm: '^3.2.25',
        findit: '^2.0.0',
        'flow-remove-types': '^2.107.0',
        'foreground-child': '^1.3.3',
        'fs-exists-cached': '^1.0.0',
        'function-loop': '^1.0.2',
        glob: '^7.1.4',
        'import-jsx': '^2.0.0',
        ink: '^2.3.0',
        isexe: '^2.0.0',
        'istanbul-lib-processinfo': '^1.0.0',
        jackspeak: '^1.4.0',
        minipass: '^3.0.0',
        mkdirp: '^0.5.1',
        nyc: '^14.1.1',
        opener: '^1.5.1',
        'own-or': '^1.0.0',
        'own-or-env': '^1.0.1',
        react: '^16.9.0',
        rimraf: '^2.7.1',
        'signal-exit': '^3.0.0',
        'source-map-support': '^0.5.16',
        'stack-utils': '^1.0.2',
        'tap-mocha-reporter': '^5.0.0',
        'tap-parser': '^10.0.1',
        'tap-yaml': '^1.0.0',
        tcompare: '^3.0.0',
        treport: '^0.5.0',
        'trivial-deferred': '^1.0.1',
        'ts-node': '^8.3.0',
        typescript: '^3.6.3',
        which: '^2.0.1',
        'write-file-atomic': '^3.0.0',
        yaml: '^1.6.0',
        yapool: '^1.0.0',
      },
      keywords: [
        'assert',
        'tap',
        'test',
        'testing',
      ],
      license: 'ISC',
      repository: {
        type: 'git',
        url: 'git+https://github.com/tapjs/node-tap.git',
      },
      scripts: {
        snap: 'bash scripts/snap.sh',
        test: 'node bin/run.js test -M coverage-map.js',
        unit: 'bash scripts/unit.sh',
        posttest: 'rm -rf cli-tests-*',
        postunit: 'npm run posttest',
        t: 'node bin/run.js test -J -sfails.txt',
        preversion: 'npm test',
        postversion: 'npm publish',
        postpublish: 'bash postpublish.sh',
        'www:build': 'cd docs; npm ci; npm run build',
        'www:develop': 'cd docs; npm run develop',
        start: 'npm run www:develop',
        'www:serve': 'cd docs; npm run serve',
      },
      tap: {
        esm: false,
        'test-ignore': '/(^|/)cli-tests-[0-9]+/',
        'check-coverage': true,
      },
      nyc: {
        include: [
          'bin/run.js',
          'bin/jsx.js',
          'bin/jack.js',
          'lib/*.js',
        ],
      },
      bundleDependencies: [
        'treport',
        'ink',
      ],
      funding: {
        url: 'https://github.com/sponsors/isaacs',
      },
      gitHead: '1f189791991a39603ddb2ddccda38ae5c3501ebe',
      bugs: {
        url: 'https://github.com/tapjs/node-tap/issues',
      },
      _id: 'tap@14.10.1',
      _nodeVersion: '12.12.0',
      _npmVersion: '6.13.1',
      dist: {
        integrity: 'sha512-GsjAtKf9WKe2Cj5/5OckVdwyz4kv4pjlidDPpNY32ikR6rkBnicU/gxwckXvV/pQ5uTDx+od6XqmVAB7ityXWg==',
        shasum: '4e88d5964decec69236cb302e6ce4b2691d56fb7',
        tarball: 'https://registry.npmjs.org/tap/-/tap-14.10.1.tgz',
        fileCount: 4057,
        unpackedSize: 13755449,
        'npm-signature': '-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v3.0.4\r\nComment: https://openpgpjs.org\r\n\r\nwsFcBAEBCAAQBQJd1uFuCRA9TVsSAnZWagAAPLUP/2qtnbVYG0FO7skKvf2x\nNPwCqx26cBthO3dcAcdWrMqDUOZ47ehiQY9MDq+uFRQXex1qm+9cLGs0iAvd\nai1Sl2hbeXsz1sgtou3Un+xciLDz3GeGe7fJxff5/7dBU1eFNWxb8vuj/RLp\noVeBv2ldGlbwoNlmLVPwYRBxJLqjSrIlxb0WqjhiIK0qORjq4FWfFOa1Chsv\nRSABc4rtxJb+j73ZKXci57+FluyyZ3SDGhBRRmG9eg6WpGH13HW/G4OC46Yd\n8P7BSoVjQyUUy2YtV93pH+4aSgCI+fZgarJHErkpe9msV40rwIhaAueJ+FuG\nb5VddhcZfe0d2+AeWfEZTOxhUZ73bpgzJt7m5mvJu0GINn50srvBeo8aX28w\nFS9RKstpDt/bltKxU/SnPwDGeMw6REVtH1y/zp+z8KOyssna5MWpKjkJWtd+\neeXP2M/F9BZR/DSW8qFa9leyUbvAmEvdgdmRf4Rat2NTxhZg9tEQBgiQL7CE\n4eIjjXa+zHYrhRXo58wh40AeBzokz9uGuUsO0q3Ng1QryRKh/aAJdZYwLjQn\n2+2YFpM8I48ZvncX5Lgk02l9hUCImjhHF39beYdepxd7XjzCEn8iJOT9QVKs\nyExkn3vT/sJGBxhu+kP9ohf7uGxP5vA/2DKNl1JpytRcx1Y/4MmjJqeI5cFk\nnLh0\r\n=UyOf\r\n-----END PGP SIGNATURE-----\r\n',
      },
      maintainers: [
        {
          name: 'isaacs',
          email: 'i@izs.me',
        },
      ],
      _npmUser: {
        name: 'isaacs',
        email: 'i@izs.me',
      },
      directories: {},
      _npmOperationalInternal: {
        host: 's3://npm-registry-packages',
        tmp: 'tmp/tap_14.10.1_1574363501939_0.33934590404088816',
      },
      _hasShrinkwrap: false,
    },
  },
  maintainers: [
    {
      name: 'isaacs',
      email: 'i@izs.me',
    },
  ],
  time: {
    modified: '2019-11-21T19:11:45.717Z',
    created: '2011-04-21T07:10:43.641Z',
    '0.0.1': '2011-12-07T00:43:11.747Z',
    '0.0.2': '2011-12-07T00:43:11.747Z',
    '0.0.3': '2011-12-07T00:43:11.747Z',
    '0.0.4': '2011-12-07T00:43:11.747Z',
    '0.0.5': '2011-12-07T00:43:11.747Z',
    '0.0.6': '2011-12-07T00:43:11.747Z',
    '0.0.7': '2011-12-07T00:43:11.747Z',
    '0.0.8': '2011-12-07T00:43:11.747Z',
    '0.0.9': '2011-12-07T00:43:11.747Z',
    '0.0.10': '2011-10-05T16:27:33.077Z',
    '0.0.11': '2011-10-12T17:24:00.166Z',
    '0.0.12': '2011-10-25T01:16:31.213Z',
    '0.0.13': '2011-11-09T18:17:44.426Z',
    '0.0.14': '2011-11-15T21:44:41.812Z',
    '0.1.0': '2011-11-21T23:12:20.309Z',
    '0.1.1': '2011-12-07T00:43:11.747Z',
    '0.1.2': '2011-12-07T01:02:22.675Z',
    '0.1.3': '2011-12-12T16:45:15.464Z',
    '0.1.4': '2012-01-06T07:33:09.449Z',
    '0.2.0': '2012-01-08T09:01:42.732Z',
    '0.2.1': '2012-02-21T22:36:39.686Z',
    '0.2.2': '2012-02-22T18:38:05.208Z',
    '0.2.3': '2012-02-23T04:42:21.738Z',
    '0.2.4': '2012-03-18T22:51:57.167Z',
    '0.2.5': '2012-05-11T14:55:41.125Z',
    '0.2.6': '2012-07-24T08:17:49.554Z',
    '0.3.0': '2012-07-31T16:42:54.501Z',
    '0.3.1': '2012-08-27T17:38:19.286Z',
    '0.3.2': '2012-11-06T17:28:05.592Z',
    '0.3.3': '2012-11-29T17:41:43.052Z',
    '0.4.0': '2013-01-22T19:33:23.342Z',
    '0.4.1': '2013-03-25T18:08:33.634Z',
    '0.4.2': '2013-04-29T15:56:38.588Z',
    '0.4.3': '2013-05-16T14:33:13.636Z',
    '0.4.4': '2013-08-12T15:22:55.540Z',
    '0.4.5': '2013-11-19T04:40:57.700Z',
    '0.4.6': '2013-11-19T05:01:17.956Z',
    '0.4.7': '2014-01-07T17:10:38.346Z',
    '0.4.8': '2014-01-08T03:02:50.706Z',
    '0.4.9': '2014-04-28T17:53:03.516Z',
    '0.4.11': '2014-06-09T01:41:53.412Z',
    '0.4.12': '2014-07-23T21:22:27.476Z',
    '0.4.13': '2014-09-30T20:39:43.768Z',
    '0.5.0': '2015-01-14T23:34:42.557Z',
    '0.6.0': '2015-02-13T01:12:07.856Z',
    '0.7.0': '2015-02-26T01:22:54.728Z',
    '0.7.1': '2015-02-27T00:41:39.706Z',
    '1.0.0-beta.0': '2015-04-29T21:59:59.574Z',
    '1.0.0-beta.1': '2015-04-30T05:53:15.664Z',
    '1.0.0-beta.2': '2015-05-02T18:08:14.260Z',
    '1.0.0-beta.3': '2015-05-03T03:40:50.994Z',
    '1.0.0-beta.4': '2015-05-03T18:11:18.989Z',
    '1.0.0-beta.5': '2015-05-06T18:51:52.590Z',
    '1.0.0': '2015-05-07T00:24:43.814Z',
    '1.0.1': '2015-05-08T01:02:56.624Z',
    '1.0.2': '2015-05-08T19:09:13.493Z',
    '1.0.3': '2015-05-12T18:58:40.966Z',
    '1.0.4': '2015-05-12T19:07:16.776Z',
    '1.0.5': '2015-05-18T01:45:34.516Z',
    '1.0.6': '2015-05-18T20:38:07.557Z',
    '1.0.7': '2015-05-18T21:05:26.892Z',
    '1.0.8': '2015-05-18T23:32:20.629Z',
    '1.0.10': '2015-05-19T23:24:48.836Z',
    '1.1.0': '2015-05-20T22:51:26.911Z',
    '1.1.3': '2015-05-26T02:18:30.577Z',
    '1.1.4': '2015-05-26T05:52:44.919Z',
    '1.2.0': '2015-05-26T18:47:30.888Z',
    '1.2.1': '2015-06-19T21:38:11.011Z',
    '1.3.0': '2015-06-23T21:02:34.333Z',
    '1.3.1': '2015-06-25T00:35:12.396Z',
    '1.3.2': '2015-07-31T18:27:17.259Z',
    '1.3.3': '2015-08-28T22:19:39.959Z',
    '1.3.4': '2015-08-29T21:11:22.318Z',
    '1.4.0': '2015-09-02T23:29:23.971Z',
    '1.4.1': '2015-09-08T23:19:11.883Z',
    '2.0.0': '2015-09-27T18:35:57.626Z',
    '2.0.1': '2015-10-06T23:08:34.885Z',
    '2.1.0': '2015-10-07T00:07:17.918Z',
    '2.1.1': '2015-10-08T18:09:05.957Z',
    '2.2.0': '2015-10-23T23:22:14.717Z',
    '2.2.1': '2015-11-12T21:53:39.627Z',
    '2.3.0': '2015-11-18T18:08:47.775Z',
    '2.3.1': '2015-11-20T23:45:16.188Z',
    '2.3.2': '2015-12-15T21:49:37.563Z',
    '2.3.3': '2015-12-18T06:50:10.449Z',
    '2.3.4': '2015-12-22T19:22:19.458Z',
    '2.3.5': '2015-12-25T03:20:57.452Z',
    '3.0.0': '2015-12-30T02:08:35.584Z',
    '3.1.0': '2015-12-30T07:59:59.842Z',
    '3.1.1': '2015-12-30T08:17:31.944Z',
    '3.1.2': '2015-12-30T08:27:14.765Z',
    '4.0.0': '2015-12-31T01:05:07.215Z',
    '5.0.0': '2016-01-04T07:57:34.811Z',
    '5.0.1': '2016-01-10T01:18:07.289Z',
    '5.1.0': '2016-01-17T06:52:10.982Z',
    '5.1.1': '2016-01-17T06:58:35.769Z',
    '5.1.2': '2016-01-25T07:06:39.915Z',
    '5.2.0': '2016-01-27T06:26:15.941Z',
    '5.3.0': '2016-01-31T08:11:41.802Z',
    '5.4.0': '2016-01-31T08:34:40.815Z',
    '5.4.1': '2016-01-31T18:46:41.359Z',
    '5.4.2': '2016-02-01T04:07:19.921Z',
    '5.4.3': '2016-02-09T01:08:16.142Z',
    '5.4.4': '2016-02-13T06:14:33.805Z',
    '5.4.5': '2016-02-16T02:21:29.480Z',
    '5.5.0': '2016-02-16T06:31:54.673Z',
    '5.6.0': '2016-02-18T06:44:59.724Z',
    '5.7.0': '2016-02-22T19:23:31.954Z',
    '5.7.1': '2016-04-08T12:18:52.859Z',
    '5.7.2': '2016-05-23T22:22:50.531Z',
    '5.7.3': '2016-06-21T00:12:25.485Z',
    '5.8.0': '2016-06-24T17:53:46.753Z',
    '6.0.0': '2016-07-01T01:56:41.853Z',
    '6.1.0': '2016-07-01T07:52:14.383Z',
    '6.1.1': '2016-07-01T17:08:45.562Z',
    '6.2.0': '2016-07-15T15:52:45.740Z',
    '6.3.0': '2016-07-31T00:05:33.099Z',
    '6.3.1': '2016-08-11T17:37:58.528Z',
    '6.3.2': '2016-08-11T18:00:56.847Z',
    '7.0.0': '2016-08-27T07:34:10.077Z',
    '7.0.1': '2016-09-06T06:49:24.462Z',
    '7.1.0': '2016-09-07T06:15:48.150Z',
    '7.1.1': '2016-09-08T18:34:59.697Z',
    '7.1.2': '2016-09-09T22:34:16.239Z',
    '8.0.0': '2016-10-25T17:02:00.844Z',
    '8.0.1': '2016-11-17T22:50:46.026Z',
    '9.0.0': '2017-01-08T07:14:26.811Z',
    '9.0.1': '2017-01-08T07:45:16.646Z',
    '9.0.2': '2017-01-09T07:51:21.438Z',
    '9.0.3': '2017-01-09T23:14:34.103Z',
    '10.0.0': '2017-01-28T09:43:10.024Z',
    '10.0.1': '2017-02-02T06:25:36.192Z',
    '10.0.2': '2017-02-02T23:32:13.217Z',
    '10.1.0': '2017-02-07T23:33:58.858Z',
    '10.1.1': '2017-02-14T19:24:26.311Z',
    '10.1.2': '2017-02-18T02:11:41.119Z',
    '10.2.0': '2017-02-19T01:17:23.261Z',
    '10.2.1': '2017-02-23T04:05:34.295Z',
    '10.2.2': '2017-02-27T07:59:56.879Z',
    '10.3.0': '2017-03-02T03:47:57.522Z',
    '10.3.1': '2017-03-29T18:02:43.854Z',
    '10.3.2': '2017-04-09T06:45:20.550Z',
    '10.3.3': '2017-06-02T23:36:59.577Z',
    '10.3.4': '2017-06-16T17:01:54.724Z',
    '10.4.0': '2017-06-18T15:07:06.113Z',
    '10.5.0': '2017-06-20T16:20:59.378Z',
    '10.5.1': '2017-06-20T17:13:23.854Z',
    '10.5.2': '2017-06-22T18:03:10.207Z',
    '10.6.0': '2017-06-24T00:01:10.692Z',
    '10.7.0': '2017-06-25T06:52:43.501Z',
    '10.7.1': '2017-08-01T18:10:54.064Z',
    '10.7.2': '2017-08-12T20:09:07.394Z',
    '10.7.3': '2017-11-07T20:38:12.370Z',
    '11.0.0-rc.0': '2017-11-20T14:32:52.250Z',
    '11.0.0-rc.1': '2017-11-20T14:44:35.989Z',
    '11.0.0-rc.2': '2017-11-20T22:24:03.894Z',
    '11.0.0-rc.3': '2017-11-21T00:37:54.561Z',
    '11.0.0': '2017-11-26T00:37:26.591Z',
    '11.0.1': '2017-12-21T22:00:39.004Z',
    '11.1.0': '2018-01-30T18:04:24.149Z',
    '11.1.1': '2018-02-19T23:21:04.340Z',
    '11.1.2': '2018-03-07T21:14:11.123Z',
    '11.1.3': '2018-03-20T16:21:35.848Z',
    '11.1.4': '2018-04-13T22:26:07.096Z',
    '11.1.5': '2018-05-09T00:03:40.635Z',
    '12.0.0': '2018-05-17T16:52:05.580Z',
    '12.0.1': '2018-05-17T21:19:23.829Z',
    '12.0.2': '2018-11-12T20:14:09.799Z',
    '12.1.0': '2018-11-13T00:35:25.695Z',
    '12.1.1': '2018-12-12T07:35:16.807Z',
    '12.1.2': '2019-01-21T07:35:55.952Z',
    '12.1.3': '2019-01-22T19:12:03.808Z',
    '12.1.4': '2019-01-22T23:59:42.942Z',
    '12.2.0': '2019-01-23T06:00:08.818Z',
    '12.2.1': '2019-01-23T06:15:03.919Z',
    '12.3.0': '2019-01-23T07:41:11.483Z',
    '12.4.0': '2019-01-23T08:08:35.495Z',
    '12.4.1': '2019-01-30T05:37:42.342Z',
    '12.5.0': '2019-01-30T05:46:45.936Z',
    '12.5.1': '2019-02-01T05:02:44.028Z',
    '12.5.2': '2019-02-08T05:26:21.465Z',
    '12.5.3': '2019-02-15T22:19:47.479Z',
    '12.6.0': '2019-03-07T01:33:11.566Z',
    '13.0.0-rc.0': '2019-03-11T05:00:37.953Z',
    '13.0.0-rc.1': '2019-03-11T06:02:12.603Z',
    '13.0.0-rc.2': '2019-03-13T06:36:25.694Z',
    '13.0.0-rc.3': '2019-03-13T20:39:42.717Z',
    '13.0.0-rc.4': '2019-03-16T19:03:30.068Z',
    '13.0.0-rc.5': '2019-03-16T20:00:08.081Z',
    '13.0.0-rc.6': '2019-03-17T22:53:26.719Z',
    '13.0.0-rc.7': '2019-03-17T23:08:30.800Z',
    '13.0.0-rc.8': '2019-03-18T00:59:02.866Z',
    '13.0.0-rc.9': '2019-03-18T03:29:35.711Z',
    '13.0.0-rc.10': '2019-03-18T06:02:51.939Z',
    '13.0.0-rc.11': '2019-03-20T05:15:58.997Z',
    '13.0.0-rc.12': '2019-03-21T06:16:11.920Z',
    '13.0.0-rc.13': '2019-03-22T19:41:50.688Z',
    '12.6.1': '2019-03-22T20:25:41.253Z',
    '13.0.0-rc.14': '2019-03-22T20:58:08.215Z',
    '13.0.0-rc.15': '2019-03-25T07:39:13.348Z',
    '13.0.0-rc.16': '2019-03-25T16:52:03.029Z',
    '13.0.0-rc.17': '2019-03-26T00:14:48.498Z',
    '13.0.0-rc.18': '2019-03-26T00:29:01.435Z',
    '13.0.0-rc.19': '2019-03-29T20:59:07.070Z',
    '13.0.0-rc.20': '2019-03-31T07:58:04.154Z',
    '13.0.0-rc.21': '2019-04-06T07:10:24.781Z',
    '13.0.0-rc.22': '2019-04-06T19:21:56.761Z',
    '13.0.0-rc.23': '2019-04-06T21:47:54.166Z',
    '13.0.0-rc.24': '2019-04-17T07:06:01.820Z',
    '12.6.2': '2019-04-17T07:12:36.455Z',
    '13.0.0-rc.25': '2019-04-20T23:46:29.991Z',
    '12.6.3': '2019-04-22T18:54:38.534Z',
    '13.0.0-rc.26': '2019-04-24T05:16:36.284Z',
    '13.0.0-rc.27': '2019-04-24T06:00:43.556Z',
    '13.0.0-rc.28': '2019-04-24T07:35:05.627Z',
    '12.6.4': '2019-04-24T17:45:45.675Z',
    '13.0.0-rc.29': '2019-04-24T17:47:06.044Z',
    '13.0.0-rc.30': '2019-04-24T17:52:51.047Z',
    '12.6.5': '2019-04-24T17:55:07.270Z',
    '13.0.0': '2019-04-26T00:25:40.735Z',
    '13.0.1': '2019-04-26T13:37:06.429Z',
    '12.6.6': '2019-04-26T15:59:37.558Z',
    '13.0.3': '2019-04-26T18:39:12.415Z',
    '13.0.4': '2019-04-27T16:53:41.665Z',
    '13.1.0': '2019-04-28T16:39:50.669Z',
    '12.7.0': '2019-04-28T22:45:31.385Z',
    '13.1.1': '2019-04-29T16:43:23.543Z',
    '13.1.2': '2019-05-01T18:57:45.169Z',
    '13.1.3': '2019-05-08T00:12:18.057Z',
    '13.1.4': '2019-05-08T23:28:27.662Z',
    '13.1.5': '2019-05-08T23:33:15.870Z',
    '13.1.6': '2019-05-09T00:03:28.556Z',
    '13.1.7': '2019-05-10T17:46:09.523Z',
    '13.1.8': '2019-05-11T05:39:21.495Z',
    '13.1.9': '2019-05-14T17:16:31.931Z',
    '13.1.10': '2019-05-17T00:26:04.576Z',
    '13.1.11': '2019-05-17T18:50:03.823Z',
    '14.0.0': '2019-05-18T00:32:33.761Z',
    '14.1.0': '2019-05-20T18:35:14.543Z',
    '14.1.1': '2019-05-20T23:27:42.703Z',
    '14.1.2': '2019-05-21T19:39:20.647Z',
    '14.1.3': '2019-05-21T23:41:04.124Z',
    '14.1.4': '2019-05-22T16:10:02.236Z',
    '14.1.5': '2019-05-22T16:13:27.271Z',
    '14.1.6': '2019-05-22T16:21:00.537Z',
    '14.1.7': '2019-05-22T18:38:10.089Z',
    '14.1.8': '2019-05-23T19:09:26.635Z',
    '14.1.9': '2019-05-23T19:18:09.460Z',
    '14.1.10': '2019-05-23T20:35:05.851Z',
    '14.1.11': '2019-05-24T19:24:08.152Z',
    '14.2.0': '2019-05-28T07:01:35.785Z',
    '14.2.1': '2019-06-04T20:26:44.592Z',
    '14.2.2': '2019-06-05T19:13:22.620Z',
    '14.2.3': '2019-06-14T22:01:56.352Z',
    '14.2.4': '2019-06-19T19:17:45.429Z',
    '14.2.5': '2019-06-22T03:24:23.369Z',
    '14.3.0': '2019-06-25T07:46:30.641Z',
    '14.3.1': '2019-06-25T16:55:21.759Z',
    '14.4.0': '2019-07-02T19:24:09.456Z',
    '14.4.1': '2019-07-03T22:49:23.599Z',
    '14.4.2': '2019-07-17T00:06:28.003Z',
    '14.4.3': '2019-07-22T18:21:38.340Z',
    '14.5.0': '2019-07-28T22:05:19.780Z',
    '14.6.0': '2019-08-04T05:23:18.176Z',
    '14.6.1': '2019-08-04T06:23:03.127Z',
    '14.6.2': '2019-09-10T21:03:02.489Z',
    '14.6.3': '2019-09-15T17:42:03.265Z',
    '14.6.4': '2019-09-15T17:52:29.555Z',
    '14.6.5': '2019-09-23T18:59:52.816Z',
    '14.6.6': '2019-09-29T18:15:04.676Z',
    '14.6.7': '2019-09-29T20:05:34.822Z',
    '14.6.8': '2019-09-30T20:29:53.786Z',
    '14.6.9': '2019-09-30T20:35:57.072Z',
    '14.7.0': '2019-10-14T05:54:42.003Z',
    '14.7.1': '2019-10-16T00:58:53.962Z',
    '14.7.2': '2019-10-18T02:39:21.561Z',
    '14.7.3': '2019-10-20T23:57:53.461Z',
    '14.8.0': '2019-10-21T00:00:47.432Z',
    '14.8.1': '2019-10-22T15:16:02.028Z',
    '14.8.2': '2019-10-22T17:42:18.404Z',
    '14.8.3': '2019-10-30T18:18:35.937Z',
    '14.9.0': '2019-10-30T21:23:52.285Z',
    '14.9.1': '2019-10-30T22:07:05.366Z',
    '14.9.2': '2019-11-06T22:06:56.941Z',
    '14.10.0': '2019-11-21T07:05:52.820Z',
    '14.10.1': '2019-11-21T19:11:42.253Z',
  },
  author: {
    name: 'Isaac Z. Schlueter',
    email: 'i@izs.me',
    url: 'http://blog.izs.me',
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/tapjs/node-tap.git',
  },
  users: {
    substack: true,
    fgribreau: true,
    tokuhirom: true,
    dshaw: true,
    michaelnisi: true,
    hij1nx: true,
    luk: true,
    kevinohara80: true,
    isao: true,
    kesla: true,
    mk: true,
    conradz: true,
    brianloveswords: true,
    morishitter: true,
    inancgumus: true,
    kewah: true,
    scull7: true,
    oroce: true,
    awaterma: true,
    nickleefly: true,
    markthethomas: true,
    program247365: true,
    lcsrinaldi: true,
    wenbing: true,
    makenova: true,
    n370: true,
    ckross01: true,
    bsnote: true,
    tfentonz: true,
    hal9zillion: true,
    tylerm: true,
    stany: true,
    xieranmaya: true,
    keberox: true,
    gr2m: true,
    eerne: true,
    max_devjs: true,
    nomemires: true,
    travm: true,
    jerrywu: true,
    jmwlsn: true,
    leodutra: true,
    erikvold: true,
    backnight: true,
    micnic: true,
    rogeruiz: true,
    grantcarthew: true,
    xueboren: true,
    seangenabe: true,
    brainpoint: true,
    rsp: true,
    dralc: true,
    'vassiliy.pimkin': true,
    grandsong: true,
    rogerta: true,
    gher: true,
    nikolay: true,
    neomorphic: true,
    michalskuza: true,
    'jarvis-npm': true,
    larrychen: true,
    sasquatch: true,
    kodekracker: true,
    shriharishastry: true,
    shujianbu: true,
    agrcrobles: true,
    knksmith57: true,
    jag82: true,
  },
  readme: "# node-tap\n\nA <abbr title=\"Test Anything Protocol\">TAP</abbr> test framework for\nNode.js.\n\n[![Build Status](https://travis-ci.org/tapjs/node-tap.svg?branch=master)](https://travis-ci.org/tapjs/node-tap)\n\n_Just wanna see some code? [Get started!](http://www.node-tap.org/basics/)_\n\nIt includes a command line test runner for consuming TAP-generating test\nscripts, and a JavaScript framework for writing such scripts.\n\n* [Getting started guide](http://www.node-tap.org/basics/)\n* Built-in [test coverage](http://www.node-tap.org/coverage/)\n* Many [reporter formats](http://www.node-tap.org/reporting/)\n* Extensive [API](http://www.node-tap.org/api/) featuring:\n  * Great [promise support](http://www.node-tap.org/promises/)\n  * Comprehensive [assert library](http://www.node-tap.org/asserts/)\n  * Other [advanced stuff](http://www.node-tap.org/advanced/)\n  * Mocha-like [BDD DSL](http://www.node-tap.org/mochalike/)\n  * [Parallel Testing](http://www.node-tap.org/parallel/)\n* [Command-line interface](http://www.node-tap.org/cli/) for running tests\n  (whether they use node-tap or not)\n\nSee [the changelog](http://www.node-tap.org/changelog/) for recent updates,\nor just get started with [the basics](http://www.node-tap.org/basics/).\n\nAll this is too much to manage in a single README file, so head over to\n[the website](http://www.node-tap.org/) to learn more.\n\n## Why TAP?\n\nWhy should you use this thing!?  **LET ME TELL YOU!**\n\nJust kidding.\n\nMost frameworks spend a lot of their documentation telling you why they're\nthe greatest.  I'm not going to do that.\n\n### <i lang=\"it\" title=\"all tastes are tastes\">tutti i gusti sono gusti</i>\n\nSoftware testing is a software and user experience design challenge that\nbalances on the intersection of many conflicting demands.\n\nNode-tap is based on [my](http://izs.me) opinions about how a test\nframework should work, and what it should let you do.  I do _not_ have any\nopinion about whether or not you share those opinions.  If you do share\nthem, you will probably enjoy this test library.\n\n1. **Test files should be \"normal\" programs that can be run directly.**\n\n   That means that it can't require a special runner that puts magic\n   functions into a global space.  `node test.js` is a perfectly ok way to\n   run a test, and it ought to function exactly the same as when it's run\n   by the fancy runner with reporting and such.  JavaScript tests should be\n   JavaScript programs; not english-language poems with weird punctuation.\n\n2. **Test output should be connected to the structure of the test file in a\n   way that is easy to determine.**\n\n   That means not unnecessarily deferring test functions until `nextTick`,\n   because that would shift the order of `console.log` output.  Synchronous\n   tests should be synchronous.\n\n3. **Test files should be run in separate processes.**\n\n   That means that it can't use `require()` to load test files.  Doing\n   `node ./test.js` must be the exact same sort of environment for the test\n   as doing `test-runner ./test.js`.  Doing `node test/1.js; node\n   test/2.js` should be equivalent (from the test's point of view) to doing\n   `test-runner test/*.js`.  This prevents tests from becoming implicitly\n   dependent on one anothers' globals.\n\n4. **Assertions should not normally throw (but throws MUST be handled\n   nicely).**\n\n   I frequently write programs that have many hundreds of assertions based\n   on some list of test cases.  If the first failure throws, then I don't\n   know if I've failed 100 tests or 1, without wrapping everything in a\n   try-catch.  Furthermore, I usually want to see some kind of output or\n   reporting to verify that each one actually ran.\n\n   Basically, it should be your decision whether you want to throw or not.\n   The test framework shouldn't force that on you, and should make either\n   case easy.\n\n5. **Test reporting should be separate from the test process, included in\n   the framework, and enabled by default for humans.**\n\n   The [raw test output](https://www.node-tap.org/tap-format/) should be\n   machine-parseable and human-intelligible, and a separate process should\n   consume test output and turn it into a [pretty summarized\n   report](https://www.node-tap.org/reporting/).  This means that test data\n   can be stored and parsed later, dug into for additional details, and so\n   on.  Also: nyan cat.\n\n6. **Writing tests should be easy, maybe even fun.**\n\n   The lower the barrier to entry for writing new tests, the more tests get\n   written.  That means that there should be a relatively small vocabulary\n   of actions that I need to remember as a test author.  There is no\n   benefit to having a distinction between a \"suite\" and a \"subtest\".\n   Fancy DSLs are pretty, but more to remember.\n\n   That being said, if you return a Promise, or use a DSL that throws a\n   decorated error, then the test framework should Just Work in a way that\n   helps a human being understand the situation.\n\n7. **Tests should output enough data to diagnose a failure, and no more or\n   less.**\n\n   Stack traces pointing at JS internals or the guts of the test framework\n   itself are not helpful.  A test framework is a serious UX challenge, and\n   should be treated with care.\n\n8. **Test coverage should be included.**\n\n   Running tests with coverage changes the way that you think about your\n   programs, and provides much deeper insight.  Node-tap bundles\n   [NYC](https://istanbul.js.org/) for this.\n\n   It _does_ necessarily change the nature of the environment a little bit.\n   But in this case, it's worth it, and NYC has come a long way towards\n   maintaining this promise.\n\n   Coverage _enforcement_ is not on by default, but I strongly encourage\n   it.  You can put `\"tap\":{\"check-coverage\":true}` in your package.json,\n   or pass [`--100`](https://www.node-tap.org/100/) on the command line.\n   In a future version, it will likely be enabled by default.\n\n9. **Tests should not require more building than your code.**\n\n   Babel and Webpack are lovely and fine.  But if your code doesn't require\n   compilation, then I think your tests shouldn't either.  Tap is extremely\n   [promise-aware](https://www.node-tap.org/promises/).  JSX, TypeScript,\n   Flow, and ES-Modules are\n   [built-in](https://www.node-tap.org/using-with/) when tests are run by\n   the tap CLI.\n\n10. **Tests should run as fast as possible, given all the prior\n    considerations.**\n\n   As of version 10, tap supports [parallel\n   tests](https://www.node-tap.org/parallel/).  As of version 13, the test\n   runner defaults to running the same number of parallel tests as there\n   are CPUs on the system.\n\n   This makes tests significantly faster in almost every case, on any machine\n   with multiple cores.\n\nSoftware testing should help you build software.  It should be a security\nblanket and a quality ratchet, giving you the support to undertake massive\nrefactoring and fix bugs without worrying.  It shouldn't be a purification\nrite or a hazing ritual.\n\nThere are many opinions left off of this list!  Reasonable people can\ndisagree.  But if you find yourself nodding along, [maybe tap is for\nyou](https://www.node-tap.org/basics/).\n",
  homepage: 'http://www.node-tap.org/',
  keywords: [
    'assert',
    'tap',
    'test',
    'testing',
  ],
  bugs: {
    url: 'https://github.com/tapjs/node-tap/issues',
  },
  license: 'ISC',
  readmeFilename: 'README.md',
}
