module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [".ios.js", ".android.js", ".ios.jsx", ".android.jsx", ".js", ".jsx", ".json", ".ts", ".tsx"],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens', 
            '@assets': './assets', 
          },
        },
      ],
    ],
  };
};
