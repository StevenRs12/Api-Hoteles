const express = require('express');
const app = express();



//configuraciones
app.set('port', 3800)

//middlewares

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//rutas

app.use('/api',require('./src/routes/hoteles'));

//inicializar servidor
app.listen(3800, () => {
    console.log('servidor en el puerto', app.get('port'));
})
