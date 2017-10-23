'use strict';
const config_param = require('../helpers/config')();
const schema = process.env.SCHEMA || config_param.schema_esusgestor;

module.exports = function(sequelize, DataTypes) {
  var BancoDados = sequelize.define('BancoDados', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'co_banco_dados'
    },
    descricao: {
        type: DataTypes.STRING(255),
        field: 'ds_banco_dados',
        allowNull: false
    }
  },{
    schema: schema,
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_banco_dados'
  });

  return BancoDados;
};
