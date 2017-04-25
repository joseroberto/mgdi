'use strict';

module.exports = function(sequelize, DataTypes) {
  var UnidadeMedida = sequelize.define('UnidadeMedida', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'co_unidade_medida'
    },
    descricao: {
        type: DataTypes.STRING,
        field: 'ds_unidade_medida'
      }
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_unidade_medida'
  });
  return UnidadeMedida;
};
