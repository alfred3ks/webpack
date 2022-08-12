/*

Ya tenemos parte de la configuracion del proyecto, nos hacen falta agregar unos plugins y configuraciones para poder probar nuestro proyecto en el navegador.

Vamos a instalar los loader y el plugins para poder trabajar con html.

npm install html-loader html-webpack-plugin -D

Ahora vamos al archivo de configuracion de webpack. Agregamos una nueva regla para estos archivos:

{
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader'
    }
  ]
}

Ademas agregamos el plugin antes instalado:

plugins:[
  new HtmlWebpackPlugin({
    template:'./public/index.html',
    filename: './index.html'
  })

Con esto ya tenemos la configuracion del plugin y del loader.

Vamos a ver si nuestra configuracion funciona. Crearemos los script en el package.json:

"start": "webpack serve",
"build":"webpack --mode production"

npm run start
npm run build

OJO, tambien he añadido el modo developer porque nos salia muchos warning:

mode: 'development',



*/