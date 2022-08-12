/*

Con todo lo aprendido ahora vamos a llevar ese conocimiento para preparar nuestro proyecto de react desde cero.

Nuestra propia configuracion.

Creamos una carpeta:

react-webpack

Vamos a instalar las dependencias pra nuestro proyecto.

package.json:
npm init -y

Instalamos react:
npm install react react-dom -S

Ahora creamos la estructura de nuestro proyecto:

public/index.html
src/index.js
src/components/App.jsx

Ahora vamos a meter nuestro codigo en los archivos:
--- index.js:

import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'))

--- index.html:

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Webpack</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>

--- App.jsx: rafce el shortcode...

import React from 'react'

const App = () => {
  return (
    <h1>Hello ReactJS</h1>
  )
}

export default App;

Listo esto es el inicio de nuestro proyecto.

Seguimos...

*/