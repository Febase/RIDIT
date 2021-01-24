const path = require("path");
const PROJECT_ROOT = path.resolve(__dirname, "../");

module.exports = {
  projectRoot: PROJECT_ROOT,
  outputPath: path.join(PROJECT_ROOT, "dist"),
  chromePath: path.join(PROJECT_ROOT, "chrome"),
  extensionPath: path.join(PROJECT_ROOT, "chrome/extension"),
};
