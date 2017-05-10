'use strict';

module.exports = function(sequelize, DataTypes) {
  var IndicadorRelacionado = sequelize.define('IndicadorRelacionado', {
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_indicador_relacionado'
  });

  return IndicadorRelacionado;
};
