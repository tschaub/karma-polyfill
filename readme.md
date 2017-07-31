# karma-polyfill-default

Loads polyfills from https://polyfill.io/ before running tests.
This package requests the polyfill with no paremeters by default.

## Use

Install the plugin with `npm`:

    npm install karma-polyfill-default --save-dev

Configure Karma to load the plugin as a framework and specify [the features](https://polyfill.io/v2/docs/features/) you need polyfilled:

```js
module.exports = function(config) {
  config.set({
    frameworks: ['polyfill'],
    polyfill: ['Promise', 'fetch'] // etc. If polyfill doesn't exist, request url with no parameter will be used.
    // additional settings here ...
  });
};
```

The above configuration will load the https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise,fetch script before your tests run.

Note that if you've included a `plugins` section in your Karma config, you will need to add a `karma-polyfill` entry to your plugins array.
