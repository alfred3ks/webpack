/*

Vamos ahora a habilitar el modo watch.

Asi escuchamos los cambios y se complilaran de manera automatica los cambios.
Vamos a hacerlo en la configuracion de modo de desarrollo, no tocaremos la de modo produccion ya que en esa no es necesaria, lo es en desarrollo.

Lo colocamos en el archivo webpack.config.dev.js

watch: true,

Compilamos:

npm run dev

Vemos como la consola se queda esperando que cuando hagamos un cambio esta se recargara y la app se volvera a compilar.

Esa es una de las formas en la cual podemos configurar esa manera, pero tambien lo podemos hacer en el package.json

"dev:watch":"webpack --watch --config webpack.config.dev.js"

Usaremos una u otra opcion. Ambas funcionan igual.

*/
