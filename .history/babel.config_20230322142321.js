module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          app: './app',
          screens: './app/screens',
          components: './app/components',
          assets: './app/assets',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
