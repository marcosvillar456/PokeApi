const { Router } = require("express");
const RutaPokemons = require("./pokemons.js");
const TypePokemon = require("./TypePokemon.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", RutaPokemons);

router.use("/type", TypePokemon);

module.exports = router;
