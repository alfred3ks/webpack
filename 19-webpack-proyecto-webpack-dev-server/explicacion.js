/*

Cuando trabajamos con webpack y estamos editando nuestro proyecto queremos ver los cambios en tiempo real, tener un servidor de dearrrollo local. Vamos a instalar una dependencia para crear nuestro servidor en local.

npm install webpack-dev-server -D

Ahora vamos a agregar una configuracion en nuestro archivo de webpack en este caso el de desarrollo, webpack.config.dev.js

devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 8000,
    open: true
  }

Tambien tenemos que quitar el modo watch que ya tenemos en este archivo debajo de la opcion:

mode: 'development',
  watch: false, -> lo quitamos...

Ahora añadimos esta configuracion a nuestro package.json:

"start": "webpack serve --config webpack.config.dev.js"

Lo corremos:

npm run start:

Vemos que ya tenemos nuestro servidor corriendo con webpack.
Ahora si hacemos cambios vemos como el servidor se actualiza y se reflejan los cambios.

Ahora segun parece la version de webpack durante el curso es mas vieja y la nueva version te dice como debes hacerlo diferente asi que vamos a añadir la nueva configuracion:

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true
    },
    watchFiles: path.join(__dirname, './**'),
    compress: true,
    historyApiFallback: true,
    port: 8000,
    open: true
  }

seguimos....

*/
