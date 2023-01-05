
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
// const isAdmin = require('../middlewares/isAdmin');

const PeliculasController = require('../controllers/PeliculasController');

//Endpoints

router.get("/", PeliculasController.getAllPeliculas);
router.post("/", PeliculasController.newPelicula);
router.put("/", PeliculasController.updatePelicula);
router.delete("/", PeliculasController.deletePelicula);


//Endpoints con middleware...

router.post("/rated", PeliculasController.postPeliculasByRated);
router.post("/id", PeliculasController.postPeliculasById);
router.post("/title", PeliculasController.postPeliculasByTitle);
router.post("/genre", PeliculasController.postPeliculasByGenre);

//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;