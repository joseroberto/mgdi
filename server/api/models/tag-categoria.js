'use strict';

module.exports = function(sequelize, DataTypes) {
  var TagCategoria = sequelize.define('TagCategoria', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'co_tag_categoria'
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'ds_tag_categoria',
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
    tableName: 'tb_tag_categoria'
  });
  return TagCategoria;
};
