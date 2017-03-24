# karma-polyfill

Loads polyfills from https://polyfill.io/ before running tests.

## Use

Install the plugin with `npm`:

    npm install karma-polyfill --save-dev

Configure Karma to load the plugin as a framework and specify [the features](https://polyfill.io/v2/docs/features/) you need polyfilled:

```js
module.exports = function(config) {
  config.set({
    frameworks: ['polyfill'],
    polyfill: ['Promise', 'fetch'] // etc.
    // additional settings here ...
  });
};
```

The above configuration will load the https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise,fetch script before your tests run.

Note that if you've included a `plugins` section in your Karma config, you will need to add a `karma-polyfill` entry to your plugins array.
