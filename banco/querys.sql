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
