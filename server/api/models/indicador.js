'use strict';

module.exports = function(sequelize, DataTypes) {
  var Indicador = sequelize.define('Indicador', {
    codigo: {
        type: DataTypes.STRING(8),
        allowNull: false,
        primaryKey: true,
        field: 'co_indicador'
    },
    titulo: {
        type: DataTypes.STRING(200),
        field: 'ds_titulo',
        allowNull: false
    },
    periodicidade: {
        type: DataTypes.INTEGER,
        field: 'co_periodicidade',
        allowNull: false
    },
    unidade_medida: {
        type: DataTypes.INTEGER,
        field: 'co_unidade_medida',
        allowNull: false
    },
    metodo_calculo:{
        type: DataTypes.TEXT,
        field: 'ds_metodo_calculo'
    },
    conceituacao:{
        type: DataTypes.TEXT,
        field: 'ds_conceituacao'
    },
    interpretacao:{
        type: DataTypes.TEXT,
        field: 'ds_interpretacao'
    },
    usos:{
        type: DataTypes.TEXT,
        field: 'ds_uso'
    },
    limitacoes:{
        type: DataTypes.TEXT,
        field: 'ds_limitacao'
    },
    notas:{
        type: DataTypes.TEXT,
        field: 'ds_nota'
    },
    observacoes:{
        type: DataTypes.TEXT,
        field: 'ds_observacao'
    }
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_indicador'
  });
  return Indicador;
};
