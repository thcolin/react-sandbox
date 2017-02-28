# React Sandbox
Just a personnal sandbox to experiment react and it's environment (webpack, babel)

## Tutorials
* [Setup a React Environment Using webpack and Babel](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)
* [Setting up webpack, Babel and React from scratch](https://stanko.github.io/setting-up-webpack-babel-and-react-from-scratch/)
* [Github repo with React, webpack and Babel](https://github.com/alicoding/react-webpack-babel)
* [CSS in JS projects list](https://github.com/MicheleBertoli/css-in-js)
* [Webpack — The Confusing Parts](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9)
* [Flux vs Redux](https://blog.andyet.com/2015/08/06/what-the-flux-lets-redux/)
* [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.iad9glybi)

## What and Why ?
* `React` : to write and include web component
* `Webpack` : to compile every components together
* `Babel` : to process ES6 to browser-compatible Javascript
* `Aphrodite` : simplify style writing, and needed if you want pseudo class & media-queries
  * I should not export aphrodite linked css, should be vanilla

## Exceptions
* I manage images (`src`, `background-image`) normally, without using `webpack` libraries like `file-loader` or `url-loader`

## Use
* `npm start` : this command will start `webpack-dev-server`

## Structure
Just some thoughts, not fixed :
```
- components
-- App
--- App.tpl.js // Export only html (or JSX ?) template
--- App.styles.js // Export Aphrodite style (cf. https://github.com/Khan/aphrodite)
--- App.ctrl.js // Export logic (controller ?)
--- App.react.js // React component assembling everything together
--- App.wcomp.js? // Web component assembling everything together (cf. http://w3c.github.io/webcomponents/spec/custom)
```

## Continue
* Global and ~~component~~ **style**
* Improve webpack configs (dev, prod)
* Client and Server side rendering
* Sort dev/non-dev npm dependencies
* Look for naming good practices
* Create smart components (with controller)
* Webpack Hot Module Replacement (HMR)
* Data flow & concepts (see [Flux](https://github.com/facebook/flux/) and [Redux](http://redux.js.org/))
