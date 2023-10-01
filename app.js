const express = require('express');
const app = express();


app.listen(process.env.PORT || 3005, () => {
    console.log('Servidor corriendo en el puerto 3005')
})

/*app.listen (3000, () => {
    console.log('el servidor esta activo');
});..*/


app.use(express.static('public'));

const path = require('path'); //resolver obtener la ruta absoluta

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
});
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/registro.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'));
});