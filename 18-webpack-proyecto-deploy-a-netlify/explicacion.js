/*

Llego el momento de hacer deploy de nuestra aplicacion.

Haremos el deploy en netlify.

https://www.netlify.com/

- Debemos registrarnos.
- Nuestro repo del proyecto debe estar en un control de versiones en la nube, gitlab, github, etc.
-Preparamos nuestro proyecto con un archivo de configuracion:

netlify.toml con la siguiente configuracion:

[build]
  publish = "dist"
  command = "npm run build"

Nuestro proyecto ahora debemos guardar todos los cambios.

Ahora nos vamos a netlify.

- Import from git,
- Conectamos con el repo(github),
- Seguimos las opciones.
- Le damos deploy. Tarda un poco.

OJO con lo output de la consola los errores que puede mostrar. Para este caso dice que tiene problemas con que no consigue el modulo de stylus.

Lo instalamos dentro del proyecto, ya que lo tenemos solo para desarrollo.

npm install stylus -D

Tambien da problemas con el archivo .env, el servidor no puede leer las variables de entorno. Vamos a crear un script para instalar estas variables en el servidor.

Creamos una carpeta: script

Dentro creamos el archivo create-env.js

const fs = require('fs')

fs.writeFileSync('./.env', `API=${process.env.API}\n`)

Luego nos dirigimos a netlify al apartado de Environment/Environmant variables

key API
value: https://https://randomuser.me/api/

Guardamos. Ahora tenemos que ejecutar este script creado antes de hacer el build.

Lo hacemos en el package.json

"build": "node ./scripts/create-env.js && --mode production --config webpack.config.js",

Compilamos y subimos a github.

Como ya el royecto fue subido la primera vez al subirlo a github este se sube directamente a netlify.

Con esa configuracion ya hara la build arriba en el servidor lo unico seria subir el repo a github y automatica se guardan los cambios en netlify ya que ya esta escuchando los cambios.
Vemos el log de netlify.



*/
