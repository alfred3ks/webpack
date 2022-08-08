/*

Ahora vamos a ver como hacer un modo desarrollo para nuestro proyecto.

Tenemos que crear un nuevo archivo de configuracion para separar lo que tendremos en produccion con lo que tendremos en modo desarrollo.

Creamos el archivo webpack.config.dev.js

Este archivo llevara la configuracion actual que tenemos del proyecto con algunas modificaciones agregando el modo development.

Teniendo listo nuestro nuevo archivo de configuracion para development ahora vamos al package.json para decirle cual es la configuracion.

"dev": "webpack --config webpack.config.dev.js"

De esta forma ya tenemos nuestra estructura para que al llamar nuestra configuracion se aplique esa de desarrollo.

Compilamos:

npm run dev

*/



