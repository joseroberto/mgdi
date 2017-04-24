'use strict';

module.exports = function(sequelize, DataTypes) {
  var Indicador = sequelize.define('Indicador', {
    codigo: {
        type: DataTypes.STRING(8),
        allowNull: false,
        primaryKey: true,
        field: 'co_indicador'
    },
    descricao: {
        type: DataTypes.STRING(200),
        field: 'ds_indicador'
    },
    metodo_calculo:{
        type: DataTypes.TEXT,
        field: 'ds_metodo_calculo'
    },
    conceituacao:{
        type: DataTypes.TEXT,
        field: 'ds_conceituacao'
    }
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_indicador'
  });
  return Indicador;
};
