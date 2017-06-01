<?php
$relatorioG = (!isset($relatorioG)) ? "" : $relatorioG;
if($relatorioG != "sim") {
        if(empty($uf)){
                $uf = (!isset($_GET['ufs']) || empty($_GET['ufs'])) ? '' : $_GET['ufs'];
        }
        if(empty($ibge)){
                $ibge = (!isset($_GET['ibges']) || empty($_GET['ibges'])) ? '' : $_GET['ibges'];
        }
        if(empty($regiao)){
                $regiao = (!isset($_GET['re_giao']) || empty($_GET['re_giao'])) ? '' :  $_GET['re_giao'];
        }
        if(empty($tc)){
                $tc = (!isset($_GET['tc']) || empty($_GET['tc'])) ? '' :  $_GET['tc'];
        }
        if(empty($cg)){
                $cg = (!isset($_GET['cg']) || empty($_GET['cg'])) ? '' :  $_GET['cg'];
        }
        if(empty($rm)){
                $rm = (!isset($_GET['rm']) || empty($_GET['rm'])) ? '' :  $_GET['rm'];
        }
        if(empty($qs)){
                $qs = (!isset($_GET['qs']) || empty($_GET['qs'])) ? '' :  $_GET['qs'];
        }
        //
        //valida os parametros
        //
        if(!function_exists("dadosFiltroValidaInt")){
                include("dadosFiltroFuncoes.php");
        }
        dadosFiltroValidaInt("uf",$uf,100);
        dadosFiltroValidaInt("ibge",$ibge,900000);
        dadosFiltroValidaStr("regiao",$regiao);
        dadosFiltroValidaInt("tc",$tc,1000);
        dadosFiltroValidaInt("cg",$cg,100000);
        dadosFiltroValidaInt("rm",$rm,1000);
        dadosFiltroValidaInt("qs",$qs,100);
}
?>
