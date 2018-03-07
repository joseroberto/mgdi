'use strict';
const config_param = require('../helpers/config')();
const schema = process.env.SCHEMA || config_param.schema;

module.exports = function(sequelize, DataTypes) {
  var IndicadorUnidadeMedida = sequelize.define('IndicadorUnidadeMedida', {
  },{
    schema: schema,
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_indicador_unidade_medida'
  });

  return IndicadorUnidadeMedida;
};
