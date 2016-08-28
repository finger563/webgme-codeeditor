# WebGME Configuration Settings

On `npm start`, the webgme app will load `config.default.js` which
will override the configuration
[defaults](https://github.com/webgme/webgme/tree/master/config).

If `NODE_ENV` is set, it will first try to load the configuration
settings from `config/config.ENV.js` where `ENV` is the value of
`NODE_ENV`. For example,

```
NODE_ENV=debug npm start
```

will load the configuration settings from `config/config.debug.js` if
it exists and fallback to `config/config.default.js` otherwise

**NOTE**: The language configuration for a given attribute is
  completely a [CodeMirror](http://codemirror.net).  The supported
  languages can be found on [the code mirror
  site](http://codemirror.net/mode/index.html).  The configuration
  structure provided in the components.json is a CodeMirror
  [mode](http://codemirror.net/doc/manual.html#config).