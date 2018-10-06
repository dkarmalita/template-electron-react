# Use `chmod +x ./react-init.sh` to make it executable.

# Create npm project
# npm init -y
cp ./scripts/templates/package.template.json package.json

# Add webpack & webpack dev server
# Note: since Babel 7 release, we need to specify babel-loader@7 version here because the current version of babel-loader requires babel@7 engine.
npm add -D webpack webpack-cli webpack-dev-server
npm add -D @babel/core babel-loader @babel/preset-env @babel/preset-react

## Support spreads
# npm add -D babel-plugin-transform-object-rest-spread
npm add -D @babel/plugin-proposal-object-rest-spread

## Support react state assignment
# npm add -D babel-plugin-transform-class-properties
npm add -D @babel/plugin-proposal-class-properties

## Support flow
# npm add -D @babel/preset-flow
# npm add -D @babel/plugin-transform-flow-strip-types

## Support decorators / ref .babelrc
# npm add -D babel-plugin-transform-decorators-legacy

## SASS
npm add -D autoprefixer css-loader \
node-sass postcss-easy-import postcss-loader \
sass-loader style-loader \
url-loader

## Usefu webpack plugins
npm add -D clean-webpack-plugin \
copy-webpack-plugin \
compression-webpack-plugin \
html-webpack-plugin \
react-hot-loader

## Core dependensies setup
npm add -S babel-polyfill react react-dom

## Jest
npm add -D jest
npm add -D babel-jest babel-core regenerator-runtime
npm add -D babel-plugin-transform-es2015-modules-commonjs
# jest --init

# git init
# git add -A
# git commit -m [Initial]

## Electron
npm add -D electron
npm add -D electron-builder
npm add -D electron-devtools-installer

npm add electron-is-dev
npm add electron-publisher-s3

## Other tools
npm add -D concurrently
npm add -D cross-env
npm add -D version-bump-prompt
npm add -D wait-on


