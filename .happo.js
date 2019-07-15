const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  type: 'plain',
  targets: {
    chrome: new RemoteBrowserTarget('chrome', { viewport: '800x600' }),
  },
};
