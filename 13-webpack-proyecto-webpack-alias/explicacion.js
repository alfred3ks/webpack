/*

Una de las configuraciones de webpack que podemos usar es crear alias para identificar mucho mejor la forma en la que vamos a traer cada uno de los elementos dentro de nuestros archivos.

Vamos de nuevo sobre el archivo de confiracion de webpack:

Vamos a ver como usar los alias para evitar por ejemplo cuando importamos un archivo tener que hacer cosas tan largas como esto:

'../../direccions/etc';

Nos vamos a el archivo de configuracion de webpack en resolve y vamos a crear un nuevo apartado que le vamos a llamar alias:

alias: {
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@images': path.resolve(__dirname, 'src/assets/images/')
    }

Ahora usamos esos alias por ejemplo en index.js

import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/vars.styl';

Tambien lo hacemos en el archivo Template.js:

import getData from '@utils/getData.js';
import gitHub from '@images/github.png';
import instagram from '@images/instagram.png';
import twitter from '@images/twitter.png';

Ahora volvemos a compilar y vemos si funciona:

npm run dev

Funciona!!!!

*/



