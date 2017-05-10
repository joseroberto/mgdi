'use strict';

module.exports = function(sequelize, DataTypes) {
  var IndicadorCategoriaAnalise = sequelize.define('IndicadorCategoriaAnalise', {
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_indicador_categoria_analise'
  });

  return IndicadorCategoriaAnalise;
};
