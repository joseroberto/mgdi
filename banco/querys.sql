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
