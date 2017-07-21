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
    unidade_responsavel: {
        type: DataTypes.INTEGER,
        field: 'co_unidade_responsavel',
        allowNull: false
    },
    periodicidade_atualizacao: {
        type: DataTypes.INTEGER,
        field: 'co_periodicidade_atualizacao',
        allowNull: false
    },
    periodicidade_avaliacao: {
        type: DataTypes.INTEGER,
        field: 'co_periodicidade_avaliacao',
        allowNull: false
    },
    periodicidade_monitoramento: {
        type: DataTypes.INTEGER,
        field: 'co_periodicidade_monitoramento',
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
        allowNull: false,
        defaultValue: 0
    },
    granularidade: {
        type: DataTypes.INTEGER,
        field: 'co_granularidade',
        allowNull: false,
        defaultValue: 0
    },
    criterio_agregacao: {
        type: DataTypes.INTEGER,
        field: 'co_criterio_agregacao',
        allowNull: false,
        defaultValue: 0
    },
    banco_dados: {
        type: DataTypes.INTEGER,
        field: 'co_banco_dados',
        allowNull: false,
        defaultValue: 0
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
        field: 'st_ativo',
        allowNull: false,
        defaultValue: 0
    },
    carga_manual:{
        type: DataTypes.BOOLEAN,
        field: 'st_carga_manual',
        allowNull: false,
        defaultValue: 0
    },
    acumulativo:{
        type: DataTypes.BOOLEAN,
        field: 'st_acumulativo',
        allowNull: false,
        defaultValue: 0
    },
    privado:{
        type: DataTypes.BOOLEAN,
        field: 'st_privado',
        allowNull: false,
        defaultValue: 0
    },
    especifico:{
        type: DataTypes.BOOLEAN,
        field: 'st_especifico',
        allowNull: false,
        defaultValue: 0
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
           as: 'PeriodicidadeAtualizacao',
           foreignKey: 'co_periodicidade_atualizacao'});
        Indicador.belongsTo(models.Periodicidade,{
             as: 'PeriodicidadeAvaliacao',
             foreignKey: 'co_periodicidade_avaliacao'});
        Indicador.belongsTo(models.Periodicidade,{
            as: 'PeriodicidadeMonitoramento',
            foreignKey: 'co_periodicidade_monitoramento'});
        Indicador.belongsTo(models.ClassificacaoIndicador,{
            as: 'ClassificacaoIndicador',
            foreignKey: 'co_indicador_classificacao'});
        Indicador.belongsTo(models.UnidadeMedida,{
            as: 'UnidadeMedida',
            foreignKey: 'co_unidade_medida'});
        Indicador.belongsTo(models.Unidade,{
           as: 'UnidadeResponsavel',
           foreignKey: 'co_unidade_responsavel'});
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
