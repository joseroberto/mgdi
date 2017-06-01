<?php
                 //BRASIL
                if ($uf == null and $ibge == null and $regiao == null and $tc == null and $cg == null and $qs == null)  //  and $rm ==null
                {
                           $relBr = 1;


                            $where2 = "tb_pop_faixas_estado.co_uf is not null";
                            $where = "tb_ibge.ibge is not null";
                                $where3 = "tb_consolidada_temp.co_ibge is not null";
                                //Sem Filtro Mostrar todo o Brasil
                                $valuePromptAnswers="-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9";


                }// fim if brasil


                elseif ($ibge != null)
                {
                          $where= "tb_ibge.ibge = $ibge";
                          //Filtra o Municipio IBGE
                          $valuePromptAnswers="$ibge^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9";
                }
                // estado
            elseif ($ibge == null and $tc == null and $cg == null and $uf != null and $regiao == null)
                {
                          $relBr = 2;

                            $where = "tb_ibge.co_uf = $uf";
                            $where2 = "tb_pop_faixas_estado.co_uf= $uf";
                                //Filtra o Municipio UF
                                $valuePromptAnswers="-9^$uf^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9";

                }// fim if estado


                // REGI?~CO
                elseif (strlen($regiao)==1 and $ibge == null)
        {
                          $relBr = 3;


                                $where = "substring(CAST (tb_ibge.co_uf AS text), 1, 1)='$regiao'";
                                //Filtra o Municipio Regiao
                                $valuePromptAnswers="-9^-9^$regiao^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9";

                }// fim if REGIAO
                //AL
           elseif ($regiao == "AL" and $ibge == null)
           {
                           $where = "tb_ibge.amazonia_legal = 1";

                           //Filtro AL 11ª Posição
                           $valuePromptAnswers="-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^1^-9^-9^-9^-9";
                   }// fim if AL
           elseif ($regiao == "RD" and $ibge == null)
           {
                           $where = "tb_ibge.co_ride = 1";
                           //Filtro RD 12ª Posição
                           $valuePromptAnswers="-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^1^-9^-9^-9";
                   }// fim if AL
                   //SA
           elseif ($regiao == "SA" and $ibge == null)
           {
                           $where = "tb_ibge.semi_arido = 1";
                           //Filtro RD 13ª Posição
                           $valuePromptAnswers="-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^1^-9^-9";
                   }// fim if SA
                                   //QF
           elseif ($regiao == "QF" and $ibge==null)
           {
                           $where= "habilitados_qualifar = 1";
                           //Filtro RD 14ª Posição
                           $valuePromptAnswers="-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^1^-9";
                   }// fim if QF
                   // SF
                   elseif ($regiao == "SF" and $ibge == null)
           {
                           $where = "tb_ibge.sis_fronteiras = 1";
                           //Filtro RD 14ª Posição
                           $valuePromptAnswers="-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^1";
                   }// fim if SF
                   // QS
                   elseif ($regiao == "QS" and $ibge == null)
           {
                           $where = "tb_ibge.co_id_qualisus = $qs";
                           //Filtro Qualisus 5ª Posição
                           $valuePromptAnswers="-9^-9^-9^-9^$qs^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9";
                   }// fim QS

                   // TC
           elseif ($tc != null and $ibge == null)
           {
                           $where= "tb_ibge.co_tr_cidadania = $tc ";
                           //Filtro Territorio Cidadania 7ª Posição
                           $valuePromptAnswers="-9^-9^-9^-9^-9^-9^$tc^-9^-9^-9^-9^-9^-9^-9^-9";
                   }// fim if TC
                   // CG
                     elseif ($regiao == "CG" and $ibge == null)
                 {
                                 $where = "tb_ibge.co_colegiado = $cg";
                                 //Filtro Colegiado 6ª Posição
                                 $valuePromptAnswers="-9^-9^-9^-9^-9^$cg^-9^-9^-9^-9^-9^-9^-9^-9^-9";
                         }// fim if CG
                         // RM
                 elseif ($rm != null and $ibge == null)
                 {
                                 $where = "tb_ibge.codigo_id_metropolitana = $rm";
                                 //Filtro Região Metropolitana 4ª Posição
                                 $valuePromptAnswers="-9^-9^-9^$rm^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9^-9";
                         }// fim if RM
                                 // PX
                         elseif ($regiao == "PX" and $ibge == null)
                 {
                                 $where = "tb_ibge.st_xingu = 1";
                                 //Filtro PX 10ª Posição
                                 $valuePromptAnswers="-9^-9^-9^-9^-9^-9^-9^-9^-9^1^-9^-9^-9^-9^-9";
                         }// fim if PX
                         // TC
                         elseif ($regiao == "TC" and $ibge == null )
                 {
                                 $where = "dbgeral.tb_ibge.co_tr_cidadania > 0";
                                 //Filtro TC 9ª Posição
                                 $valuePromptAnswers="-9^-9^-9^-9^-9^-9^-9^-9^1^-9^-9^-9^-9^-9^-9";
                         }// fim if TC

                         // RM
                         elseif ($regiao == "RM" and $ibge == null )
                 {
                                 $where = "dbgeral.tb_ibge.codigo_id_metropolitana >0";
                                 //Filtro RM 8ª Posição
                                 $valuePromptAnswers="-9^-9^-9^-9^-9^-9^-9^1^-9^-9^-9^-9^-9^-9^-9";
                         }// fim if RM


         ?>
