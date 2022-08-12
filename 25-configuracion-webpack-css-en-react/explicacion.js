/*

Llego el momneto de agregar soporte para css para el proyecto con react.

Vamos a instalar las dependencias y plugins:

npm install mini-css-extract-plugin css-loader style-loader sass sass-loader -D

Volvemos a nuestro archivo de webpack.config.js:

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  test:/\.s[ac]ss$/,
  use:[
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
}

new MiniCssExtractPlugin({
  filename: '[name].css'
})

Ahora ya podemos crear nuestro css:

src/styles/global.scss

$base-color: #c6538c;
$color: rgba(black, 0.88);

body {
  background-color: $base-color;
  color: $color;
}

Ahora debemos integrarlo en nuesto componente: en index.js:

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx';
import './styles/global.scss'

ReactDOM.render(<App />, document.getElementById('app'))

Compilamos:

npm run start

Seguimos...

*/