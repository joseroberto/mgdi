'use strict';

module.exports = function(sequelize, DataTypes) {
  var Indicador = sequelize.define('Indicador', {
    codigo: {
        type: DataTypes.STRING(8),
        primaryKey: true,
        autoIncrement: true,
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
    tipo_consulta: {
        type: DataTypes.INTEGER,
        field: 'co_tipo_consulta',
        allowNull: false
    },
    banco_dados: {
        type: DataTypes.INTEGER,
        field: 'co_banco_dados',
        allowNull: false
    },
    metodo_calculo:{
        type: DataTypes.TEXT,
        field: 'ds_metodo_calculo'
    },
    referencia_consulta:{
        type: DataTypes.TEXT,
        field: 'ds_referencia_consulta'
    },
    procedimento_operacional:{
        type: DataTypes.TEXT,
        field: 'ds_procedimento_operacional'
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
    carga_manual:{
        type: DataTypes.BOOLEAN,
        field: 'st_carga_manual'
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
         //Indicador.belongsTo(models.BancoDados,{
        //   as: 'BancoDados',
        //   foreignKey: 'co_banco_dados'});
         //Indicador.belongsTo(models.TipoConsulta,{
        //  as: 'TipoConsulta',
        //  foreignKey: 'co_tipo_consulta'});
         Indicador.belongsTo(models.Periodicidade,{
           as: 'Periodicidade',
           foreignKey: 'co_periodicidade'});
         Indicador.belongsTo(models.ClassificacaoIndicador,{
            as: 'ClassificacaoIndicador',
            foreignKey: 'co_indicador_classificacao'});
         Indicador.belongsTo(models.UnidadeMedida,{
            as: 'UnidadeMedida',
            foreignKey: 'co_unidade_medida'});
         Indicador.belongsToMany(models.Indicador, {
           as: 'IndicadoresRelacionados',
           through: models.IndicadorRelacionado,
           foreignKey: 'co_indicador_pai',
         otherKey: 'co_indicador' });
         Indicador.belongsToMany(models.CategoriaAnalise, {
           as: 'CategoriasAnalise',
           through: models.IndicadorCategoriaAnalise,
           foreignKey: 'co_indicador',
         otherKey: 'co_categoria_analise' });
         Indicador.belongsToMany(models.Tag, {
           as: 'Tags',
           through: 'tb_indicador_tag',
           foreignKey: 'co_indicador',
           onDelete: 'cascade' });
      }
    },
    schema: 'dbesusgestor',
    timestamps: true,
    createdAt: 'dt_inclusao',
    updatedAt: 'dt_atualizacao',
    freezeTableName: true,
    tableName: 'tb_indicador'
  });

  return Indicador;
};
