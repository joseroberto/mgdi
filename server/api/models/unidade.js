'use strict';

module.exports = function(sequelize, DataTypes) {
  var Unidade = sequelize.define('Unidade', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'co_unidade'
    },
    sigla: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'ds_sigla'
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'ds_nome'
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'ds_email'
    },
    telefone: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'ds_telefone'
    },
    competencia: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'ds_competencia'
    },
    atividade: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'ds_atividade'
    },
    isInformal:{
        type: DataTypes.BOOLEAN,
        field: 'st_informal'
    },
  },{
    classMethods:{
        associate:function(models){
          Unidade.belongsTo(models.Unidade,{
             as: 'UnidadePai',
             foreignKey: 'co_unidade_pai'});
        }
    },
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_unidade'
  });
  return Unidade;
};
