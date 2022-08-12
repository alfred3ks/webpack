/*

Ahora vamos a analizar de nuestro proyecto el uso de todos los paquetes que estamos agregando asi como que podemos enfocar en optimizar.

Vamos a agregar una dependencia que nos ayudara a eso.

npm install webpack-bundle-analyzer -D

Ahora en nuestro archivo de configuracion de desarrollo lo agregamos:

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

new BundleAnalyzerPlugin()

corremos los script:

npx webpack --profile --json > stats.json

Analizara nuestro proyecto y nos generara un reporte.

Ahora ejecutamos:

npx webpack-bundle-analyzer stats.json

Bueno un poco abstracto...

Seguimos....

*/
