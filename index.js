var path = require('path');

var init = function(files, polyfill) {
  var url;
  if (polyfill) {
    if (typeof polyfill === 'string') {
      url = polyfill;
    } else if (polyfill.join) {
      url = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=' + polyfill.join(',');
    } else {
      throw new Error('Expected an array of features for polyfill.io or a string URL for a polyfill');
    }
  } else {
    url = 'https://cdn.polyfill.io/v2/polyfill.min.js';
  }
  files.unshift({
    pattern: url,
    included: true,
    served: true,
    watched: false
  });
};

init.$inject = ['config.files', 'config.polyfill'];

module.exports = {
  'framework:polyfill': ['factory', init]
};
