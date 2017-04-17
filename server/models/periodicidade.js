'use strict';
module.exports = function(sequelize, DataTypes) {
  var Periodicidade = sequelize.define('Periodicidade', {
    codigo: {
        type: Sequelize.INT,
        allowNull: false,
        primaryKey: true,
        field: 'co_periodicidade'
    },
    descricao: {
        type: DataTypes.STRING,
        field: 'ds_periodicidade'
      }
  },{
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_periodicidade'
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Periodicidade;
};
