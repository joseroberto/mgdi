SELECT co_ibge AS munic, nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_menores_15_anos
FROM
morbi_mortalidade2.tb_casos_agravo_hanseniase
WHERE
co_agravo = 4 AND
co_grupo_agravo = 10
GROUP BY
co_ibge,nu_ano_ref;


SELECT co_ibge AS munic, nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_menores_15_anos FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 10 GROUP BY co_ibge,nu_ano_ref;

SELECT co_ibge AS munic,nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_grau2_deformidade FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 82 GROUP BY co_ibge,nu_ano_ref;

SELECT co_ibge AS munic,nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_pop_geral FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 16 GROUP BY co_ibge,nu_ano_ref;

SELECT tb_ibge.regiao, tb_ibge.co_uf, tb_ibge.cidade, tabpop.ano_pop as ano, sum(tabpop.pop_me_15) as pop_me_15, sum(tabpop.pop) as pop_ FROM dbgeral.tb_pop_faixas AS tabpop INNER JOIN dbgeral.tb_ibge AS tb_ibge ON tabpop.co_ibge = tb_ibge.ibge WHERE  tabpop.pop_me_15 > 0 AND tabpop.pop > 0 AND tabpop.ano_pop > 2000 group by tabpop.ano_pop,tb_ibge.cidade,tb_ibge.co_uf,tb_ibge.regiao

SELECT co_ibge as munic,nu_ano_ref AS ano, sum(qt_casos_agravo) AS curados_anos_coortes FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 310 GROUP BY co_ibge,nu_ano_ref

SELECT co_ibge as munic,nu_ano_ref AS ano, sum(qt_casos_agravo) AS novos_diag_anos_coortes FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 320 GROUP BY co_ibge,nu_ano_ref

SELECT co_ibge as munic,nu_ano_ref AS ano, sum(qt_casos_agravo) AS contatos_registrados FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 90 GROUP BY co_ibge,nu_ano_ref

SELECT co_ibge as munic,nu_ano_ref AS ano, sum(qt_casos_agravo) AS contatos_examinados FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 80 GROUP BY co_ibge,nu_ano_ref

-- Codigos

tb_ibge.co_tr_cidadania = 74   --> $tc
tb_ibge.co_colegiado = ?  -->
tb_ibge.codigo_id_metropolitana = $rm
tb_ibge.co_id_qualisus = $qs
"tb_ibge.sis_fronteiras = 1"
habilitados_qualifar = 1
tb_ibge.semi_arido = 1
tb_ibge.co_ride = 1
tb_ibge.amazonia_legal = 1

tb_ibge.st_xingu = 1  --> PX
dbgeral.tb_ibge.co_tr_cidadania > 0
dbgeral.tb_ibge.codigo_id_metropolitana >0




-- Query inicial

WITH tb_ibge
     AS (SELECT tb_ibge.regiao,
                tb_ibge.co_uf,
                tb_ibge.uf,
                tabpop.ano_pop        AS ano,
                Sum(tabpop.pop_me_15) AS pop_me_15,
                Sum(tabpop.pop)       AS pop_
         FROM   dbgeral.tb_pop_faixas AS tabpop
                INNER JOIN dbgeral.tb_ibge AS tb_ibge
                        ON tabpop.co_ibge = tb_ibge.ibge
         WHERE  tb_ibge.ibge IS NOT NULL
                AND tabpop.pop_me_15 > 0
                AND tabpop.pop > 0
                AND tabpop.ano_pop > 2000
         GROUP  BY tabpop.ano_pop,
                   tb_ibge.uf,
                   tb_ibge.co_uf,
                   tb_ibge.regiao),
     tab1
     AS (SELECT co_uf,
                nu_ano_ref           AS ano,
                Sum(qt_casos_agravo) AS deteccao_menores_15_anos
         FROM   morbi_mortalidade2.tb_casos_agravo_hanseniase
         WHERE  co_agravo = 4
                AND co_grupo_agravo = 10
         GROUP  BY co_uf,
                   nu_ano_ref),
     tab2
     AS (SELECT co_uf,
                nu_ano_ref           AS ano,
                Sum(qt_casos_agravo) AS deteccao_grau2_deformidade
         FROM   morbi_mortalidade2.tb_casos_agravo_hanseniase
         WHERE  co_agravo = 4
                AND co_grupo_agravo = 82
         GROUP  BY co_uf,
                   nu_ano_ref),
     tab3
     AS (SELECT co_uf,
                nu_ano_ref           AS ano,
                Sum(qt_casos_agravo) AS deteccao_pop_geral
         FROM   morbi_mortalidade2.tb_casos_agravo_hanseniase
         WHERE  co_agravo = 4
                AND co_grupo_agravo = 16
         GROUP  BY co_uf,
                   nu_ano_ref),
     tab4
     AS (SELECT co_uf,
                nu_ano_ref           AS ano,
                Sum(qt_casos_agravo) AS curados_anos_coortes
         FROM   morbi_mortalidade2.tb_casos_agravo_hanseniase
         WHERE  co_agravo = 4
                AND co_grupo_agravo = 310
         GROUP  BY co_uf,
                   nu_ano_ref),
     tab5
     AS (SELECT co_uf,
                nu_ano_ref           AS ano,
                Sum(qt_casos_agravo) AS novos_diag_anos_coortes
         FROM   morbi_mortalidade2.tb_casos_agravo_hanseniase
         WHERE  co_agravo = 4
                AND co_grupo_agravo = 320
         GROUP  BY co_uf,
                   nu_ano_ref),
     tab6
     AS (SELECT co_uf,
                nu_ano_ref           AS ano,
                Sum(qt_casos_agravo) AS contatos_registrados
         FROM   morbi_mortalidade2.tb_casos_agravo_hanseniase
         WHERE  co_agravo = 4
                AND co_grupo_agravo = 90
         GROUP  BY co_uf,
                   nu_ano_ref),
     tab7
     AS (SELECT co_uf,
                nu_ano_ref           AS ano,
                Sum(qt_casos_agravo) AS contatos_examinados
         FROM   morbi_mortalidade2.tb_casos_agravo_hanseniase
         WHERE  co_agravo = 4
                AND co_grupo_agravo = 80
         GROUP  BY co_uf,
                   nu_ano_ref)
SELECT tb_ibge.regiao             AS "RegiÃ£o",
       tb_ibge.uf                 AS "Local",
       tb_ibge.co_uf              AS "codigogeo",
       tb_ibge.ano,
       deteccao_menores_15_anos   AS "DetecÃ§Ã£o em menores de 15 anos",
       deteccao_grau2_deformidade AS "DetecÃ§Ã£o de grau II de deformidade",
       deteccao_pop_geral         AS "DetecÃ§Ã£o na pop. geral",
       tb_ibge.pop_               AS "PopulaÃ§Ã£o",
       tb_ibge.pop_me_15          AS "PopulaÃ§Ã£o menor de 15 anos",
       curados_anos_coortes       AS "Casos curados nos anos das coortes",
       novos_diag_anos_coortes    AS
       "Casos novos diagnosticados nos anos das coortes",
       contatos_registrados       AS "Contatos intradomiciliares registrados",
       contatos_examinados        AS "Contatos intradomiciliares examinados"
FROM   tb_ibge
       LEFT JOIN tab1
              ON tb_ibge.co_uf = tab1.co_uf
                 AND tb_ibge.ano = tab1.ano
       LEFT JOIN tab2
              ON tb_ibge.co_uf = tab2.co_uf
                 AND tb_ibge.ano = tab2.ano
       LEFT JOIN tab3
              ON tb_ibge.co_uf = tab3.co_uf
                 AND tb_ibge.ano = tab3.ano
       LEFT JOIN tab4
              ON tb_ibge.co_uf = tab4.co_uf
                 AND tb_ibge.ano = tab4.ano
       LEFT JOIN tab5
              ON tb_ibge.co_uf = tab5.co_uf
                 AND tb_ibge.ano = tab5.ano
       LEFT JOIN tab6
              ON tb_ibge.co_uf = tab6.co_uf
                 AND tb_ibge.ano = tab6.ano
       LEFT JOIN tab7
              ON tb_ibge.co_uf = tab7.co_uf
                 AND tb_ibge.ano = tab7.ano
ORDER  BY tb_ibge.regiao,
          tb_ibge.co_uf,
          tb_ibge.ano



--- Query gerada

WITH IBGE AS (SELECT tb_ibge.regiao, tb_ibge.co_uf, tb_ibge.uf, tabpop.ano_pop as ano, sum(tabpop.pop_me_15) as pop_me_15, sum(tabpop.pop) as pop_ FROM dbgeral.tb_pop_faixas AS tabpop INNER JOIN dbgeral.tb_ibge AS tb_ibge ON tabpop.co_ibge = tb_ibge.ibge WHERE tabpop.pop_me_15 > 0 AND tabpop.pop > 0 AND tabpop.ano_pop > 2000 group by b_ibge.regiao, tb_ibge.co_uf, tb_ibge.uf, tabpop.ano_pop),DHM14A AS (SELECT co_uf, nu_ano_ref AS ano, sum(qt_casos_agravo) AS deteccao_menores_15_anos FROM morbi_mortalidade2.tb_casos_agravo_hanseniase WHERE co_agravo = 4 AND co_grupo_agravo = 10 GROUP BY co_uf, nu_ano_ref) SELECT * FROM IBGE  left JOIN DHM14A ON IBGE.co_uf=DHM14A.co_uf AND IBGE.ano=DHM14A.ano



-----


with recursive unidade (sigla, co_unidade, codigo_pai, path, deep, nome) as (
     select ds_sigla, co_unidade, co_unidade_pai, array[co_unidade],1, ds_nome
       from dbesusgestor.tb_unidade
       where co_unidade_pai is null
     union all
       select o1.ds_sigla, o1.co_unidade, o1.co_unidade_pai,  path || o1.co_unidade ,o2.deep+1, o1.ds_nome
       from dbesusgestor.tb_unidade o1, unidade o2
       where o2.co_unidade = o1.co_unidade_pai

    )
 select * from unidade WHERE sigla like '%DEMAS%';


 with recursive unidade (sigla, co_unidade, codigo_pai, path, deep, nome) as (
      select ds_sigla, co_unidade, co_unidade_pai, ARRAY[ds_sigla]::varchar(50)[] as path,1, ds_nome
        from dbesusgestor.tb_unidade
        where co_unidade_pai is null
      union all
        select o1.ds_sigla, o1.co_unidade, o1.co_unidade_pai,  (o2.path || o1.ds_sigla)::varchar(50)[],o2.deep+1, o1.ds_nome
        from dbesusgestor.tb_unidade o1, unidade o2
        where o2.co_unidade = o1.co_unidade_pai
     )

  select * from unidade WHERE sigla like '%DEMAS%';

  with recursive unidade (sigla, co_unidade, codigo_pai, path, deep, nome) as (
       select ds_sigla, co_unidade, co_unidade_pai, ds_sigla::varchar(50) as path,1, ds_nome
         from dbesusgestor.tb_unidade
         where co_unidade_pai is null
       union all
         select o1.ds_sigla, o1.co_unidade, o1.co_unidade_pai,  (o2.path || '/' || o1.ds_sigla)::varchar(50),o2.deep+1, o1.ds_nome
         from dbesusgestor.tb_unidade o1, unidade o2
         where o2.co_unidade = o1.co_unidade_pai
      )

   select * from unidade WHERE sigla like '%DEMAS%';

-- SVS 7457
   with recursive unidade (sigla, co_unidade, codigo_pai, path, deep, nome) as (
        select ds_sigla, co_unidade, co_unidade_pai, ds_sigla::varchar(50) as path,1, ds_nome
          from dbesusgestor.tb_unidade
          where co_unidade_pai is null and co_unidade=7457
        union all
          select o1.ds_sigla, o1.co_unidade, o1.co_unidade_pai,  (o2.path || '/' || o1.ds_sigla)::varchar(50),o2.deep+1, o1.ds_nome
          from dbesusgestor.tb_unidade o1, unidade o2
          where o2.co_unidade = o1.co_unidade_pai
       )

select * from unidade;
