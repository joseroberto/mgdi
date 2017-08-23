--- Tabelas do esquema de morbidade2

-- morbi_mortalidade2


Schema       |                  Name                   | Type  |    Owner
--------------------+-----------------------------------------+-------+-------------
morbi_mortalidade2 | tb_agravo                               | table | postgres
morbi_mortalidade2 | tb_capacitacao                          | table | luiscrneves

morbi_mortalidade2 | tb_casos_agravo_aids                    | table | postgres
morbi_mortalidade2 | tb_casos_agravo_aparelho_circulatorio   | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_causa                   | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_causa_externa           | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_dengue                  | table | postgres
morbi_mortalidade2 | tb_casos_agravo_especifica_crianca      | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_estado                  | table | luiscrneves
morbi_mortalidade2 | tb_casos_agravo_febre_amarela           | table | postgres
morbi_mortalidade2 | tb_casos_agravo_hanseniase              | table | postgres

morbi_mortalidade2 | tb_casos_agravo_hepatite_b              | table | postgres
morbi_mortalidade2 | tb_casos_agravo_hepatite_c              | table | postgres
morbi_mortalidade2 | tb_casos_agravo_homem_adolescente       | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_homem_adulto            | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_homem_idoso             | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_hpv                     | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_infecciosa_parasitaria  | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_leishmaniose_tegumentar | table | postgres
morbi_mortalidade2 | tb_casos_agravo_leishmaniose_visceral   | table | postgres
morbi_mortalidade2 | tb_casos_agravo_leptospirose            | table | postgres
morbi_mortalidade2 | tb_casos_agravo_malaria                 | table | postgres
morbi_mortalidade2 | tb_casos_agravo_meningite_bacteriana    | table | postgres
morbi_mortalidade2 | tb_casos_agravo_mortalidade_infantil    | table | postgres
morbi_mortalidade2 | tb_casos_agravo_mulher_adolescente      | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_mulher_adulta           | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_mulher_idosa            | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_raca_cor                | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_saude_trabalhador       | table | postgres
morbi_mortalidade2 | tb_casos_agravo_sifilis_congenita       | table | postgres
morbi_mortalidade2 | tb_casos_agravo_transporte_terrestre    | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_tuberculose             | table | postgres
morbi_mortalidade2 | tb_casos_agravo_vigiagua                | table | cristiano
morbi_mortalidade2 | tb_casos_agravo_violencia               | table | postgres
morbi_mortalidade2 | tb_grupo_agravo                         | table | postgres
morbi_mortalidade2 | tb_notificacao_violencia                | table | cristiano
morbi_mortalidade2 | tb_ofertas_educacionais                 | table | luiscrneves
morbi_mortalidade2 | tb_pesquisa                             | table | luiscrneves
morbi_mortalidade2 | tb_tipo_grupo_agravo                    | table | postgres
morbi_mortalidade2 | tb_violencia_dom                        | table | luiscrneves

Campos not null indicador:

 co_indicador                   | character varying(8)        | not null
 ds_titulo                      | character varying(200)      | not null
 co_periodicidade_atualizacao   | integer                     | not null
 co_unidade_medida              | integer                     | not null
 co_secretaria                  | integer                     | not null
 ds_descricao                   | character varying(255)      | not null
 co_periodicidade_avaliacao     | integer                     | not null
 co_periodicidade_monitoramento | integer                     | not null
 co_unidade_responsavel         | integer                     | not null
 co_granularidade               | integer                     | not null default 0
 co_criterio_agregacao          | integer                     | not null default 0
 co_seq_indicador               | integer                     | not null default nextval('dbesusgestor.tb_indicador_co_seq_indi


   Table "morbi_mortalidade2.tb_agravo"
Column     |          Type          | Modifiers
----------------+------------------------+-----------
co_seq_agravo  | integer                | not null
no_agravo      | character varying(60)  |
no_graf_epid   | character varying(200) |
no_graf_oper   | character varying(200) |
co_tipo_agravo | integer                |


Table "dbesusgestor.tb_resultado"
Column      |            Type             |                                 Modifiers
------------------+-----------------------------+----------------------------------------------------------------------------
co_seq           | integer                     | not null default nextval('dbesusgestor.tb_resultado_co_seq_seq'::regclass)
co_seq_indicador | integer                     | not null
co_ibge          | integer                     |

co_cnes          | integer                     |
co_anomesdia     | character(8)                |
co_anomes        | character(6)                |
co_ano           | character(4)                |
nu_valor         | numeric(12,6)               |
dt_inclusao      | timestamp without time zone | not null
dt_atualizacao   | timestamp without time zone |

select co_seq_agravo,no_agravo, no_graf_epid  from morbi_mortalidade2.tb_agravo where co_seq_agravo=2;
select * from morbi_mortalidade2.tb_grupo_agravo where co_grupo_agravo=1;
select ds_titulo from dbesusgestor.tb_indicador where co_indicador='MOR2001';
select * from morbi_mortalidade2.tb_casos_agravo_aids where co_ibge=510033;


--- Registros com erro de IBGE

select count(distinct co_ibge) from morbi_mortalidade2.tb_casos_agravo_aids where co_ibge not in (select co_ibge from dbesusgestor.tb_municipio);

select distinct co_ibge from morbi_mortalidade2.tb_casos_agravo_aids where co_ibge not in (select co_ibge from dbesusgestor.tb_municipio);


-----------------------------------------------------

select distinct co_agravo, co_grupo_agravo from morbi_mortalidade2.tb_casos_agravo_aids;

--> Inclui o indicador


não compativel q | tb_casos_agravo_raca_cor                | table | cristiano
ja carregado antes morbi_mortalidade2 | tb_casos_agravo_sifilis_congenita       | table | postgres
ja crregado antes morbi_mortalidade2 | tb_casos_agravo_tuberculose             | table | postgres
nao compativel morbi_mortalidade2 | tb_notificacao_violencia                | table | cristiano
nao compativel morbi_mortalidade2 | tb_ofertas_educacionais                 | table | luiscrneves
nao compativel morbi_mortalidade2 | tb_violencia_dom                        | table | luiscrneves

select distinct 'MOR' || ( co_agravo*1000+co_grupo_agravo)  from morbi_mortalidade2.tb_casos_agravo_sifilis_congenita;
select * from morbi_mortalidade2.tb_violencia_dom;

insert into dbesusgestor.tb_indicador (co_indicador, ds_titulo,ds_descricao,
  co_periodicidade_atualizacao, co_periodicidade_avaliacao, co_periodicidade_monitoramento,
co_unidade_medida, co_secretaria, co_unidade_responsavel, co_granularidade, co_criterio_agregacao)
select 'MOR' || ( co_agravo*1000+a.co_grupo_agravo),
(no_grupo_agravo || '-' || no_agravo) as titulo,
coalesce(no_graf_epid,no_agravo) as ds_descricao, 360 as co_periodicidade_atualizacao, 360 as co_periodicidade_avaliacao, 360 as co_periodicidade_monitoramento,
4 as co_unidade_medida,
3 as co_secretaria, 3 as co_unidade_responsavel, 3 as co_granularidade, 0 as co_criterio_agregacao
from
(select distinct co_agravo, co_grupo_agravo
    from morbi_mortalidade2.tb_notificacao_violencia) as a
inner join morbi_mortalidade2.tb_agravo b on b.co_seq_agravo=a.co_agravo
inner join  morbi_mortalidade2.tb_grupo_agravo c on c.co_grupo_agravo=a.co_grupo_agravo;


begin transaction;
insert into dbesusgestor.tb_resultado (co_seq_indicador, co_ibge, co_ano, nu_valor, dt_inclusao, dt_atualizacao)
select co_seq_indicador, co_ibge, nu_ano_ref as co_ano, qt_casos_agravo as nu_valor, current_timestamp, current_timestamp
from morbi_mortalidade2.tb_notificacao_violencia a
inner join dbesusgestor.tb_indicador b on b.co_indicador = 'MOR' || ( a.co_agravo*1000+a.co_grupo_agravo)
where co_ibge in (select co_ibge from dbesusgestor.tb_municipio);
commit;

select count(*) from dbesusgestor.tb_resultado where co_seq_indicador=170;

--- Registros com erro de IBGE

select distinct co_ibge from morbi_mortalidade2.tb_casos_agravo_causa where co_ibge not in (select co_ibge from dbesusgestor.tb_municipio);

----------------------------
select * from dbesusgestor.tb_unidade_medida;
select * from dbesusgestor.tb_granularidade;
select * from dbesusgestor.tb_unidade;
select * from dbesusgestor.tb_criterio_agregacao;

tb_casos_agravo_aparelho_circulatorio


begin transaction;
insert into dbesusgestor.tb_resultado (co_seq_indicador, co_uf, co_ano, nu_valor, dt_inclusao, dt_atualizacao)
select co_seq_indicador, co_uf, nu_ano_ref as co_ano, qt_casos_agravo as nu_valor, current_timestamp, current_timestamp
from morbi_mortalidade2.tb_casos_agravo_estado a
inner join dbesusgestor.tb_indicador b on b.co_indicador = 'MOR' || ( a.co_agravo*1000+a.co_grupo_agravo);
commit;


delete from dbesusgestor.tb_resultado where co_seq_indicador in (select co_seq_indicador from dbesusgestor.tb_indicador where co_indicador in
('MOR3006',
'MOR3001',
'MOR3007',
'MOR3010',
'MOR3004',
'MOR3008',
'MOR3009'));

select co_seq_indicador, co_ibge, nu_ano_ref as co_ano, qt_casos_agravo as nu_valor, current_timestamp, current_timestamp
from morbi_mortalidade2.tb_casos_agravo_febre_amarela a
inner join dbesusgestor.tb_indicador b on b.co_indicador = 'MOR' || ( a.co_agravo*1000+a.co_grupo_agravo)
where co_ibge in (select co_ibge from dbesusgestor.tb_municipio) and co_ibge<100;
