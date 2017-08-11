'use strict';

module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'co_tag'
    },
    categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'co_tag_categoria'
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'ds_tag'
    }
  },{
    classMethods:{
        associate:function(models){
          Tag.belongsTo(models.TagCategoria,
            {
              as: 'Categoria',
              foreignKey: 'co_tag'
            });
          Tag.belongsToMany(models.Indicador, {
            as: 'Indicadores',
            through: 'tb_indicador_tag',
            foreignKey: 'co_tag',
            otherKey: 'co_seq_indicador' });
        }
    },
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_tag'
  });
  return Tag;
};
