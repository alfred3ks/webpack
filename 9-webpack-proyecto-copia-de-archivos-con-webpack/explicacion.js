/*
Ahora veremos si en nuestro proyecto nos vemos en el caso de mover algun archivo necesario para el prpyecto desde nuestra carpeta src a dist como hacerlo, tenemos que instalar un plugin:

npm install copy-webpack-plugin -D

Vamos a configurar que archivos necesitamos mover:

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

Ahora tambien debemos hacer una cambio en el archivo template.js cambiar esas url.
<img src="../src/assets/images/twitter.png" />

a

<img src="assets/images/twitter.png" />

compilamos:

npm run dev

*/



