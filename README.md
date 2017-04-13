# react responsive ui toolbar

Get the AMD module located at `react-responsive-ui-toolbar.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'Toolbar': 'react-responsive-ui-toolbar'
  }
});

require(['react', 'Toolbar'], function(React, Toolbar) {

  React.render(React.createElement(Toolbar), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
