/*

Ahora vamos a ver como crear variables de entorno:

Cuando tenemos un proyecto que tenemos que compartir su codigo con otros dev es importante considerar las variables de entorno.

Es un espacio seguro donde tendremos unas variables que usaremos, ya sean conexion a una bd, o elementos que hacen referencia a un punto especifico de la configuracion de nuestro proyecto pero que no se quiere exponer a terceros.

Necesitamos instalar una dependecia que nos va a ayudar a trabajar con las variables de entorno:

npm install dotenv-webpack -D

Ahora vamos a agregar la configuracion:
Creamos los archivos:
.env  y
.env-example

que son donde van a vivir nuestras variables de entorno:

OJO este archivo no se sube al repo, entonces recuerda ponerlo en .gitignore

Si entramos a un equipo de trabajo debemos solicitar dichas variables de entorno al lider del equipo ya que esto solo vive en nuestro equipo.

.env-example nos dice que variables de entorno necesita el proyecto que son las que debemos pedir.

OJO este archivo si va al repo este es la referencia de las varaibles de entorno, despues de definir las variables de entorno pasamos a preparar la configuracion de webpack:

const Dotenv = require('dotenv-webpack');

En la parte de los plugin agregamos la configuracion:

new Dotenv(),

Ahora en el archivo donde usemos las variables las debemos cambiar, para la API que es el caso usaremos el archivo getData.js

const API = process.env.API

Volvemos a compilar y ver que funcione.

npm run dev

Funciona!!!

*/



