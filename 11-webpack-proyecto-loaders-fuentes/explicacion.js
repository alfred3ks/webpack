/*

Ahora vamos a optimizar las fuentes para nuestro proyecto, el llamado de las fuentes realizado a fuentes externas lo haremos para que se haga de manera local, osea vamos a colocar las fuentes para asi hacer nuestro proyecto menos pesada debido a que hace menos peticiones fuera.

En el archivo de css mail.css vemos que se hace una peticion a las google font.

@import "https://fonts.googleapis.com/css?family=Ubuntu:300,400,500";

Google font te permite descargar las fuentes pero no las da en formato .woff que es el optimizado para la web.

Las vemos descargadas en la carpeta assets/fonts.

Ahora vamos a modificar en el archivo main.css de src para que la fuente sea tomada de la local y no de google font:

@font-face {
  font-family: Ubuntu;
  src: url("../assets/fonts/ubuntu-regular.woff2") format("woff2"),
    url("../assets/fonts/ubuntu-regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

Ahora necesitamos copiar desde assets a dist las fuentes, usaremos dos recursos para leer y mover archivos:

npm install url-loader file-loader -D

Ahora en nuestro configurador de webpack añadimos esos recursos instalados en rules:

{
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: '[name].[ext]',
            outputPath: './assets/fonts/',
            publicPath: './assets/fonts/',
            esModule: false
          }
        }
      }

Volvemos a compilar:

npm run dev

Tambien ha agregado una nueva configuracion para que las imagenes al pasar a dist se guarden dentro assets:

module.exports = {
  entry: './src/index.js',
  output: {

    assetModuleFilename: 'assets/images/[hash][ext][query]'

  },




*/



