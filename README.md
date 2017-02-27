# React Sandbox
Just a personnal sandbox to experiment react and it's environment (webpack, babel)

## Tutorials
* [Setup a React Environment Using webpack and Babel](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)
* [Setting up webpack, Babel and React from scratch](https://stanko.github.io/setting-up-webpack-babel-and-react-from-scratch/)
* [Github repo with React, webpack and Babel](https://github.com/alicoding/react-webpack-babel)
* [CSS in JS projects list](https://github.com/MicheleBertoli/css-in-js)

## What and Why ?
* `React` : to write and include web component
* `Webpack` : to compile every components together
* `Babel` : to process ES6 to browser-compatible Javascript
* `Aphrodite` : simplify style writing, and needed if you want pseudo class & media-queries
  * I should not export aphrodite linked css, should be vanilla

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
* Sort dev/non-dev npm dependencies
* Look for naming good practices
* Create smart components (with controller)
