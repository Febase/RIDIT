const { commonConfig, buildValidations } = require("./build-utils");
const webpackMerge = require("webpack-merge");

module.exports = (env) => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  const mergedConfig = webpackMerge(commonConfig, envConfig);
  return mergedConfig;
};
