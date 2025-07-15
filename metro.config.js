const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {
  resolver: {
    assetExts: ['ttf', 'otf', 'png', 'jpg', 'jpeg', 'gif', 'svg'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);