/* eslint-disable import/no-extraneous-dependencies */
const injectDevServer = require('@cypress/react/plugins/react-scripts');

module.exports = (on, config) => {
  injectDevServer(on, config);
  return config;
};
