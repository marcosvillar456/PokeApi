const { Router } = require("express");
const { Type } = require("../db");
const { getTypes } = require("../Servicios/funciones");

const router = Router();

router.get("/", async (req, res) => {
  const tamaño = Type.findAll();
  if (!tamaño.length) {
    const Names = await getTypes();
    const uploadTypes = await Type.bulkCreate(Names);
    const NamesTypes = uploadTypes.map((type) => {
      return type.name;
    });
    return res.send(NamesTypes);
  } else {
    const uploadTypes = tamaño.map((type) => {
      return type.name;
    });
    res.send(uploadTypes);
  }
});

module.exports = router;
