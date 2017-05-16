'use strict';

module.exports = function(sequelize, DataTypes) {
  var TipoConsulta = sequelize.define('TipoConsulta', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'co_tipo_consulta'
    },
    descricao: {
        type: DataTypes.STRING(255),
        field: 'ds_tipo_consulta',
        allowNull: false
    }
  },{
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_tipo_consulta'
  });

  return TipoConsulta;
};
