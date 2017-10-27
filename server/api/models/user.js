'use strict';
const config_param = require('../helpers/config')();
const schema = process.env.SCHEMA || config_param.schema_esusgestor;

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        field: 'co_user'
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        field: 'ds_cpf'
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'ds_nome'
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'ds_email'
    },
    ramal: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'ds_ramal'
    },
    celular: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'ds_celular'
    },
    perfis: {
      type : DataTypes.ARRAY(DataTypes.STRING(20)),
      defaultValue:null,
      field: 'ar_perfis'
    },
    //ultimo_login: {
    //  type: DataTypes.DATE,
    //  noUpdate:true,
    //  field: 'dt_atualizacao'
    //}
  },{
    schema: schema,
    freezeTableName: true,
    timestamps: true,
    createdAt: 'dt_inclusao',
    updatedAt: 'dt_atualizacao',
    tableName: 'tb_user_mgi'
  });
  return User;
};
