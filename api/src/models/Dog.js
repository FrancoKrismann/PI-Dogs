const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      },
      defaultValue:"https://media.traveler.es/photos/613760adcb06ad0f20e11980/master/w_1600%2Cc_limit/202931.jpg"
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    heightMin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    heightMax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weightMin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weightMax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lifespan:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },{
    timestamps:false
  });
};
