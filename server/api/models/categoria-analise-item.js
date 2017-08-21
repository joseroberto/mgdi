'use strict';

module.exports = function(sequelize, DataTypes) {
  var CategoriaAnaliseItem = sequelize.define('CategoriaAnaliseItem', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'co_seq_categoria_analise_item'
    },
    descricao: {
        type: DataTypes.STRING(255),
        field: 'ds_titulo',
        allowNull: false
    }
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_categoria_analise_item'
  });

  return CategoriaAnaliseItem;
};
