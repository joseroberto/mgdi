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
            TagCategoria.hasMany(models.Tag,
              {
                as: 'Tags',
                foreignKey: 'co_tag_categoria'
              }
            );
        }
    },
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_tag_categoria'
  });
  return TagCategoria;
};
