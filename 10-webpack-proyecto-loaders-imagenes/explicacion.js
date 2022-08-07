/*

Continuamos ahora con la optimizacion de las imagenes.

Con copy-webpack-plugin movimos los archivos ahora vamos a aoptimizar esos archivos.

Vamos a agregar una nueva regla en nuestro archivo de configuracion de webpack:

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css|.styl$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ],
      },
      {
        test: /\.png/,
        type: 'assets/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src', 'assets/images'),
        to: 'assets/images'
      }]
    })
  ]
}

Ahora vamos a volver a modificar nuestro archivo template.js

Vamos a importar las imagenes ya que con la confuracion que hemos agregado ya lo podemos hacer.

<img src="assets/images/github.png" />
<img src="${gitHub}" />

Volvemos a compilar:

npm run dev


*/



