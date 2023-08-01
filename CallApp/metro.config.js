/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json'], //add here
    extraNodeModules: {
      "#node-web-compat": `/Users/kmbl278202/Desktop/CallApp/node_modules/aws-jwt-verify/dist/cjs/node-web-compat-web.js`,
    }
  },
};
