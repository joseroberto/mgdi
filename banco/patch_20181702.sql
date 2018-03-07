-- Limpa as tabelas não utilizadas pelo sistema
drop table dbesusgestor."CADSDIST";
drop table dbesusgestor.tb_populacao_municipio;
drop table dbesusgestor.tb_tipo_populacao;
drop table dbesusgestor.tb_subcategoria;
drop table dbesusgestor.tb_tematica;
drop table dbesusgestor.tb_plano_hierarquia;
drop table dbesusgestor.tb_monitoramento;
drop table dbesusgestor.tb_meta;
drop table dbesusgestor.tb_populacao_faixa;
drop table dbesusgestor.tb_faixa_etaria;
drop table dbesusgestor.tb_municipio_colegiado;
drop table dbesusgestor.tb_colegiado_gestao;


CREATE TABLE dbesusgestor.tb_indicador_unidade_medida
(
  co_indicador_unidade_medida serial NOT NULL,
  co_unidade_medida integer NOT NULL,
  dt_inclusao timestamp without time zone,
  dt_atualizacao timestamp without time zone,
  co_seq_indicador integer NOT NULL,
  CONSTRAINT tb_indicador_unidade_medida_pkey PRIMARY KEY (co_indicador_unidade_medida),
  CONSTRAINT tb_indicador_unidade_medida_co_unidade_medida_fkey FOREIGN KEY (co_unidade_medida)
      REFERENCES dbesusgestor_homologa.tb_unidade_medida (co_unidade_medida) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

