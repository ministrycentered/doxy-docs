exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-native-linear-gradient': 'react-native-web-linear-gradient',
      },
    },
  });
};
