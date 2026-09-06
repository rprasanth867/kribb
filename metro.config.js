const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Force polyfill.js to execute before any package loads
// config.serializer = {
//   ...config.serializer,
//   getModulesRunBeforeMainModule: () => [
//     require.resolve(path.join(__dirname, "polyfills.js")),
//   ],
// };

module.exports = withNativeWind(config, { input: "./global.css" });