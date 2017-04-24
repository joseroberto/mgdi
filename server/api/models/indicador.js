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
    },
    metodo_calculo:{
        type: DataTypes.STRING,
        field: 'ds_metodo_calculo'
    },
    conceituacao:{
        type: DataTypes.STRING,
        field: 'ds_conceituacao'
    },
    interpretacao:{
        type: DataTypes.STRING,
        field: 'ds_interpretacao'
    },
    uso:{
        type: DataTypes.STRING,
        field: 'ds_uso'
    },
    limitacao:{
        type: DataTypes.STRING,
        field: 'ds_limitacao'
    },
    objetivo:{
        type: DataTypes.STRING,
        field: 'ds_objetivo'
    },
    fonte_dados:{
        type: DataTypes.STRING,
        field: 'ds_fonte_dados'
    }
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_indicador'
  });
  return Indicador;
};
