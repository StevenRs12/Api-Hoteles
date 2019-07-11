'use strict'

const hoteles = require('../hoteles-data.json');

function home(req, res) {
    res.send(hoteles)
}

function obtenerHoteles(req, res) {

    var palabraBusqueda = req.params.palabraBusqueda;
    res.send(hoteles.filter((name) => name.name.toLowerCase().indexOf((palabraBusqueda).toLowerCase()) > -1));

}

module.exports = {
    obtenerHoteles,
    home
}