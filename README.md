# Minimal Webpack 2 Setup with Tree Shaking and Hot Module Replacement

Started from https://www.robinwieruch.de/minimal-react-webpack-babel-setup/ and added:

* [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) for development (also see [Webpack's Docs on HMR](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack)),
* [Tree Shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html) for production.

## Prerequisites

`Node` and `yarn` installed.

## Setup

1. Clone the repo:
```
$> git clone https://github.com/cassilup/react-hot-module-replace-tree-shake
```

2. Install dependencies:
```
$> yarn
```


## Commands

#### Development

```bash
$> yarn start
```
And navigate to http://localhost:8080 to see it in action.

Any changes to the JS(X) code will be Hot-Module-Replaced into the page (meaning: without a full refresh).

#### Production

```bash
$> yarn dist
```

...and you now have the `dist/` folder holding both `index.html` as well as the app packaged in `bundle.js`.

**Enjoy. :)**
