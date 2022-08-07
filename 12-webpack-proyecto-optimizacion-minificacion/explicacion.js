/*

Ahora vamos a optimizar nuestro proyecto. Muy importante.

vamos a instalar mas dependencias:

npm install css-minimizer-webpack-plugin terser-webpack-plugin -D

terser -> minimizar .js

Vamos a agregar los recursos instalados en la configuracion:

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }

Ahora otra de las cosas para optimizar bien nuestro proyecto tiene que ser con los hash para saber que version de nuestro proyecto estamos estamos trabajando, para esto lo que haremos es:

filename: 'main.js',

Lo cambiaremos:

filename: '[name][contenthash].js',

En las fuentes igual:

name: '[name].[ext]',
name: '[name].[contenthash].[ext]',

Y el css igual:

new MiniCssExtractPlugin(),

new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthast].css'
    }),

Ahora compilamos de nuevo:

npm run dev

Y vemos la salida en dist.

*/



