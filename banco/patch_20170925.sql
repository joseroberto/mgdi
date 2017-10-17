alter table dbesusgestor.tb_indicador add column ds_ultima_atualizacao varchar(8);


-- Indicadores anuais

update dbesusgestor.tb_indicador set ds_ultima_atualizacao=maior_data
from (select a.co_seq_indicador, max(co_ano) as maior_data from dbesusgestor.tb_indicador a inner join dbesusgestor.tb_resultado b
on a.co_seq_indicador=b.co_seq_indicador
group by a.co_seq_indicador) as sq
where dbesusgestor.tb_indicador.co_seq_indicador = sq.co_seq_indicador
and co_periodicidade_atualizacao=360;


-- Indicadores mensais

update dbesusgestor.tb_indicador set ds_ultima_atualizacao=maior_data
from (select a.co_seq_indicador, max(co_anomes) as maior_data from dbesusgestor.tb_indicador a inner join dbesusgestor.tb_resultado b
on a.co_seq_indicador=b.co_seq_indicador
group by a.co_seq_indicador) as sq
where dbesusgestor.tb_indicador.co_seq_indicador = sq.co_seq_indicador
and co_periodicidade_atualizacao=30;


update dbesusgestor.tb_indicador set co_tipo_consulta=3, co_criterio_agregacao=4
where co_periodicidade_atualizacao=360 and ds_ultima_atualizacao::int < 2500;
