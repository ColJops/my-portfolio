const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const getLatestCommitDate = () => {
  const repoRoot = path.resolve(__dirname, "..");

  try {
    const timestamp = execSync("git log -1 --format=%cI", {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();

    if (timestamp) {
      return timestamp;
    }
  } catch (error) {
    console.warn("Could not read git commit date, falling back to current time.");
  }

  return new Date().toISOString();
};

const buildInfo = {
  lastUpdated: getLatestCommitDate(),
};

const outputPath = path.join(__dirname, "../src/data/buildInfo.js");

fs.writeFileSync(
  outputPath,
  `export const buildInfo = ${JSON.stringify(buildInfo, null, 2)};\n`,
  "utf8"
);

console.log("Build info generated:", buildInfo.lastUpdated);