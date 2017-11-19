import {CategoriaAnalise, UnidadeResponsavel, Granularidade, Tag, Polaridade} from './index';

export class Indicador{
    id:number = 0;
    codigo:string = '';
    titulo:string = '';
    descricao:string = '';
    classificacao:number = 0;
    periodicidade_atualizacao:number = null;
    periodicidade_monitoramento:number = null;
    periodicidade_avaliacao:number = null;
    unidade_medida:number = 2;
    metodo_calculo:string = '';
    conceituacao:string = '';
    interpretacao:string = '';
    usos:string = '';
    limitacoes:string = '';
    notas:string = '';
    observacoes:string = '';
    fonte_dados:string = '';
    carga_manual:boolean = false;
    acumulativo: boolean = false;
    ativo:boolean = true;
    privado:boolean = false;
    tipo_consulta:number = 0;
    banco_dados:number = 0;
    referencia_consulta:string;
    procedimento_operacional:string;
    secretaria:number = null;
    unidade_responsavel:number = null;
    granularidade:number = 0;
    criterio_agregacao:number = 0;
    especifico:boolean = false;
    indice_referencia: number =null;
    ultima_atualizacao:any = null;
    polaridade:number = 0;
    Granularidade:Granularidade;
    tags:Tag[];
    IndicadoresRelacionados:Indicador[];
    CategoriasAnalise:CategoriaAnalise[];
    UnidadeResponsavel:UnidadeResponsavel;
  constructor(){
    this.IndicadoresRelacionados = [];
    this.CategoriasAnalise = [];
    this.tags = [];
  }
}
