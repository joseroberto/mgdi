'use strict';
const config_param = require('../helpers/config')();
const schema = process.env.SCHEMA || config_param.schema_esusgestor;

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
      classMethods:{
        associate:function(models){
            CategoriaAnaliseItem.belongsTo(models.CategoriaAnalise, {
              foreignKey: { field: 'co_categoria_analise', allowNull:false}
            });
        }
    },
    schema: schema,
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_categoria_analise_item'
  });

  return CategoriaAnaliseItem;
};
