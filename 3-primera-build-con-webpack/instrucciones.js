/*

Vamos a ver como crear un proyecto con webpack:

- Creamos repo de git:
  git init,

- Creamos nuestro package.json:
  npm init -y

- Creamos una carpeta src que es donde va a vivir nuestro codigo, el que nosotros creamos.
- Dentro de la carpeta src creamos el archivo index.js Es donde estara la logica es nuestro punto de entrada de nuestra aplicacion.
- Instalamos webpack:
npm install webpack webpack-cli -D

-Ahora para ejecutarlo como para este caso lo hemos instalado solo en le proyecto no de manera global:
npx webpack --mode production

Vemos como nos genera la carpeta dist con un arcjivo main.js, esto es ya el royecto compilado listo para produccion.

Ahora para correr en modo desarrollo:
npx webpack --mode development

Vemos que el resultado de la salida es distinto, mucho mas codigo para hacer debug.

Ahora vamos a ver creamos una carpeta nueva: utils, dentro un archivo llamado sum.js
Compilamos y vemos como ahora detecta tambien webpack ese archivo y lo compila. Lo vemos en modo desarrollo y produccion y apreciemos los cambios de cada uno.



*/