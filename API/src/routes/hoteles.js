'use strict'

const { Router } = require('express');
const router = Router();

const hoteles = require('../hoteles-data.json');
const hotelController=require('../controller/hotelesController');

/* router.get('/Hoteles', (req, res) => {
    res.send(hoteles);
});

router.get('/Hoteles'), (req, res) => {

} */

router.get('/Hoteles',hotelController.home);
router.get('/Hoteles/:palabraBusqueda?',hotelController.obtenerHoteles);

module.exports = router;