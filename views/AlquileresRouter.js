
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

const AlquileresController = require('../controllers/AlquileresController');

//Endpoints

router.get("/Alquileres", auth, isAdmin, AlquileresController.getAllAlquileres);

router.post("/newAlquiler", auth, AlquileresController.newAlquiler);

router.get("/userAlquileres/:id", auth, AlquileresController.getUserAlquileres);

//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;