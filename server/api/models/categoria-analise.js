'use strict';

module.exports = function(sequelize, DataTypes) {
  var CategoriaAnalise = sequelize.define('CategoriaAnalise', {
    codigo: {
        type: DataTypes.STRING(8),
        allowNull: false,
        primaryKey: true,
        field: 'co_categoria_analise'
    },
    titulo: {
        type: DataTypes.STRING(255),
        field: 'ds_titulo',
        allowNull: false
    },
    referencia: {
        type: DataTypes.TEXT,
        field: 'ds_referencia',
        allowNull: false
    }
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_categoria_analise'
  });

  return CategoriaAnalise;
};
