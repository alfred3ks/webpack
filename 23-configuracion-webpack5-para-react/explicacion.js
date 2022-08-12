/*

Ahora llego el momento de instalar webpack y configurarlo:

npm install @babel/core @babel/preset-env @babel/preset-react babel-loader -D

Ahora agregamos nuestro archivo de configuracion de babel.
--- .babelrc:

{
  "presets":[
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}

Ahora ya podemos instalar webpack para el proyecto:

npm install webpack webpack-cli webpack-dev-server -D

Ahora podemos ya crear nuestro archivo de configuracion de webpack:

--- webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', 'jsx']
  },
  module: {
    rules: [
      {
        test: /\.(.js|jsx)$/,
        exlude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true,
    },
    watchFiles: path.join(__dirname, './**'),
    compress: true,
    port: 3006,
    open: true
  }
}

Seguimos...

*/