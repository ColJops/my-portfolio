const fs = require("fs");
const path = require("path");

const buildInfo = {
  lastUpdated: new Date().toISOString(),
};

const outputPath = path.join(__dirname, "../src/data/buildInfo.js");

fs.writeFileSync(
  outputPath,
  `export const buildInfo = ${JSON.stringify(buildInfo, null, 2)};\n`,
  "utf8"
);

console.log("Build info generated:", buildInfo.lastUpdated);