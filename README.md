# webpack-template
Pre-configured with default webpack and babel configuration.

## It contains following dependencies:
	- webpack
	- webpack dev server
	- babel
	- es2015
	- css loader
	- sass loader

## Guide-lines

### Webpack
	- bundle the modules and its dependency into a single file.
	- npm install webpack webpack --save-dev

### Webpack Dev Server
	- allow us to automatic live code update.
	- npm install webpack-dev-server --save-dev


### Babel

	-  npm install babel-core babel-loader babel-preset-es2015 --save-dev

#### babel-core
	- is the main module which holds much of the logic for transforming es6 to javascript code.

#### babel-loader
	- is the module that actually accomplish the transformation.

#### webpack-dev-server
	- allow us to automatic live code update.

#### babel-preset-es2015
	- allows to specify as a preset for webpack that were converting es2015 or es6 code.

#### babel-polyfill
	- enables to aspect es6 and babel code to run natively on browsers as javascript even though all browser fully support es6

### CSS Loader
	- npm install style-loader css-loader --save-dev

### Sass Loader
	- npm install node-sass sass-loader --save-dev
