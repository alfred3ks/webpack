/*

Llego el momento ahora de crear nuestra configuracion para generar nuestro codigo de produccion, vamos a agregarle para generar una limpieza del mismo.

Instalaremos un plugin llamado:

npm install clean-webpack-plugin -D

Ahora vamos nuestro archivo de configuracion de modo produccion.

const CleanWebpackPlugin = require('clean-webpack-plugin');

new CleanWebpackPlugin()

Ahora tambien le decimos a package.json que archivo ejecutar cuando lo compilemos.

npm run build

*/



