'use strict';
const config_param = require('../helpers/config')();
const schema = process.env.SCHEMA || config_param.schema;

module.exports = function (sequelize, DataTypes) {
  var Aplicacao = sequelize.define('Aplicacao', {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'co_aplicacao'
    },
    sigla: {
      type: DataTypes.STRING(5),
      field: 'ds_sigla',
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(255),
      field: 'ds_aplicacao',
      allowNull: false
    },
    timeout: {
      type: DataTypes.INTEGER,
      field: 'ds_timeout',
      allowNull: true
    },
  }, {
    schema: schema,
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_aplicacao'
  });

  return Aplicacao;
};
