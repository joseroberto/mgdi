'use strict';

module.exports = function(sequelize, DataTypes) {
  var BancoDados = sequelize.define('BancoDados', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'co_banco_dados'
    },
    descricao: {
        type: DataTypes.STRING(255),
        field: 'ds_banco_dados',
        allowNull: false
    }
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_banco_dados'
  });

  return BancoDados;
};
