'use strict';

module.exports = function(sequelize, DataTypes) {
  var Criterio_Agregacao = sequelize.define('Criterio_Agregacao', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'co_criterio_agregacao'
    },
    descricao: {
        type: DataTypes.STRING,
        field: 'ds_criterio_agregacao',
        allowNull: false
    }
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_criterio_agregacao'
  });

  return Criterio_Agregacao;
};
