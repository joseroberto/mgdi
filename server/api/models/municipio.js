'use strict';
const config_param = require('../helpers/config')();
const schema = process.env.SCHEMA || config_param.schema;

module.exports = function(sequelize, DataTypes) {
  var Municipio = sequelize.define('Municipio', {
      codigo: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          field: 'co_ibge'
      },
      nome: {
          type: DataTypes.STRING(100),
          field: 'no_municipio',
          allowNull: false
      }
    },{
      schema: schema,
      timestamps: false,
      freezeTableName: true,
      tableName: 'tb_municipio'
    });

  Municipio.associate = function(models){
    Municipio.belongsTo(models.Uf, {foreignKey:'co_uf', as: 'UF'});
  }
  return Municipio;
};
