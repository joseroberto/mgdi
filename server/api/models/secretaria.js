'use strict';

module.exports = function(sequelize, DataTypes) {
  var Secretaria = sequelize.define('Secretaria', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'co_secretaria'
    },
    sigla: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'sg_secretaria'
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'ds_secretaria'
    }
  },{
    classMethods:{
        associate:function(models){
            /*Secretaria.hasMany(models.Indicador,
              {
                foreignKey: 'co_secretaria',
                constraints: false,
                scope: {
                  commentable: 'secretaria'
                }
              }
            );*/
        }
    },
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_secretaria'
  });
  return Secretaria;
};
