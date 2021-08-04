const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function (sequelize) {
  // defino el modelo
  return sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    force: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defending: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    heigth: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img_DB: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
