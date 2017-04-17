'use strict';

module.exports = function(sequelize, DataTypes) {
  var Indicador = sequelize.define('Indicador', {
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        field: 'co_indicador'
    },
    descricao: {
        type: DataTypes.STRING,
        field: 'ds_indicador'
    }
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_indicador'
  });
  return Indicador;
};
