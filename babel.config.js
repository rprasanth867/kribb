module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxImportSource: "nativewind",
        },
      ],
      "nativewind/babel",
    ],
    plugins: [
      "@babel/plugin-transform-private-methods",
      "@babel/plugin-transform-private-property-in-object",
      "@babel/plugin-transform-class-properties",
    ],
  };
};