#!/usr/bin/env node
const { build, cliopts } = require("estrella");

build({
  entry: "src/server/index.ts",
  outfile: "out/server/bundle.js",
  platform: 'node',
  bundle: true,
  run: cliopts.watch,
});

build({
  entry: "src/client/index.tsx",
  outfile: "out/client/bundle.js",
  platform: 'browser',
  bundle: true,
  run: false,
});

cliopts.watch && require("serve-http").createServer({
  port: 8181,
  public: true,
  pubdir: require("path").join(__dirname, "out", "client"),
});