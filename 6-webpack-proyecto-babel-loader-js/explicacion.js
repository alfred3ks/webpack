/*

Vamos a ver un proyecto para ver todas las particularidades de webpack.
Haremos un pequeño porfolio de demo.
Arrancaremos con un proyecto ya creado llamado js-portfolio, se puede descargar desde el repo:

https://github.com/gndx/js-portfolio

Este es un proyecto construido en html css y js, nada de framework ni librerias, no esta contruido con webpack. Lo vamos a preparar con webpack.

Lo primero que haremos es instalar webpack en este proyecto.
npm install webpack webpack-cli -D

Ejecutamos luego la compilacion en desarrollo:
npx webpack --mode production

Vemos como nos genera la carpeta dist.

Continuamos ahora con la creacion del archivo webpack.config.js

Este archivo nos permitira agregar la configuracion que tendra webpack, la que demos nosotros. Anteriormente no lo hemos tenido y se ha usado la de default.

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js']
  }
}

Ya con la configuracion basica para inicar ahora vamos a preparar el comando para compilar pero le pasaremos nuestra configuracion:

npx webpack --mode production --config webpack.config.js

Lo que vemos con esta configuracion que solo nos ha compilado el .js, el resto de archivos del proyecto como css, las imagenes no lo ha hecho. Y son vitales para nuestro proyecto. Lo haremos mas adelante primero todo lo que tiene que ver con js.

Lo que haremos para ser mas amigable la ejecucion del comando vamos a colocarlo en el script del package.json:

"build": "webpack --mode production"

No hace falta pasar el resto porque ya sabiendo que tiene el archivo de configuracion va a leer este.

npm run build

Ahora continuamos desarrollando la configuracion de nuestro proyecto.
Debemos añadirle Babel para que JS sea compatible con todos los navegadores.

Añadiremos unas dependencias, en este caso las de babel. OJO dependencias de desarrollo -D.
Instalamos estas dependencias y unos plugins:

npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D

Ahora debemos crear un archivo de configuracion para babel.
.babelrc

{
  "presets":[
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}

Luego vamos a agregar la configuracion en el archivo de webpack:

const path = require('path');

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
      }
    ]
  }
}

Ahora procedemos a volver a compilar nuestro proyecto y ver el resultado:
npm run build


*/