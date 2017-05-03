'use strict';

module.exports = function(sequelize, DataTypes) {
  var Indicador = sequelize.define('Indicador', {
    codigo: {
        type: DataTypes.STRING(8),
        allowNull: false,
        primaryKey: true,
        field: 'co_indicador'
    },
    titulo: {
        type: DataTypes.STRING(200),
        field: 'ds_titulo',
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(200),
        field: 'ds_descricao',
        allowNull: false
    },
    secretaria: {
        type: DataTypes.INTEGER,
        field: 'co_secretaria',
        allowNull: false
    },
    periodicidade: {
        type: DataTypes.INTEGER,
        field: 'co_periodicidade',
        allowNull: false
    },
    classificacao: {
        type: DataTypes.INTEGER,
        field: 'co_indicador_classificacao',
        allowNull: false
    },
    unidade_medida: {
        type: DataTypes.INTEGER,
        field: 'co_unidade_medida',
        allowNull: false
    },
    metodo_calculo:{
        type: DataTypes.TEXT,
        field: 'ds_metodo_calculo'
    },
    fonte_dados:{
        type: DataTypes.STRING(100),
        field: 'ds_fonte_dados'
    },
    conceituacao:{
        type: DataTypes.TEXT,
        field: 'ds_conceituacao'
    },
    interpretacao:{
        type: DataTypes.TEXT,
        field: 'ds_interpretacao'
    },
    usos:{
        type: DataTypes.TEXT,
        field: 'ds_uso'
    },
    limitacoes:{
        type: DataTypes.TEXT,
        field: 'ds_limitacao'
    },
    notas:{
        type: DataTypes.TEXT,
        field: 'ds_nota'
    },
    observacoes:{
        type: DataTypes.TEXT,
        field: 'ds_observacao'
    },
    ativo:{
        type: DataTypes.BOOLEAN,
        field: 'st_ativo'
    },
    acumulativo:{
        type: DataTypes.BOOLEAN,
        field: 'st_acumulativo'
    },
    privado:{
        type: DataTypes.BOOLEAN,
        field: 'st_privado'
    }
  },{
    classMethods: {
      associate: function(models) {
         Indicador.belongsToMany(models.Indicador, {
           as: 'IndicadoresRelacionados',
           through: 'tb_indicador_relacionado',
           foreignKey: 'co_indicador',
         otherKey: 'co_indicador_pai' });
         Indicador.belongsToMany(models.CategoriaAnalise, {
           as: 'CategoriasAnalise',
           through: 'tb_indicador_categoria_analise',
           foreignKey: 'co_indicador',
         otherKey: 'co_categoria_analise' });
         Indicador.belongsToMany(models.Tag, {
           as: 'Tags',
           through: 'tb_indicador_tag',
           foreignKey: 'co_indicador',
         otherKey: 'co_tag' });
      }
    },
    schema: 'dbesusgestor',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_indicador'
  });

  return Indicador;
};
