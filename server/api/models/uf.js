'use strict';
const config_param = require('../helpers/config')();
const schema = process.env.SCHEMA || config_param.schema;

module.exports = function(sequelize, DataTypes) {
  var Uf = sequelize.define('Uf', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'co_uf'
    },
    sigla: {
        type: DataTypes.STRING(5),
        field: 'no_uf',
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(255),
        field: 'ds_uf_extenso',
        allowNull: false
    }
  },{
    schema: schema,
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_uf'
  });

  Uf.associate = function(models){
     Uf.hasMany(models.Municipio,{as: 'Municipios',foreignKey: 'co_uf'});
  }

  return Uf;
};
