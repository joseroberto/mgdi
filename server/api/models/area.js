'use strict';

module.exports = function(sequelize, DataTypes) {
  var Area = sequelize.define('Area', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'co_area_responsavel'
    },
    descricao: {
        type: DataTypes.STRING,
        field: 'ds_area_responsavel'
    },
    sigla: {
        type: DataTypes.STRING,
        field: 'sg_area_responsavel'
    }
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_area_responsavel'
  });
  return Area;
};
