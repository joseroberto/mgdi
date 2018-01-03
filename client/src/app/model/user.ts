import { UnidadeResponsavel, Perfil } from '../model/index';

export class User{
  codigo: number = 0;
  login: string = '';
  cpf: string = '';
  nome: string = '';
  email: string = '';
  ramal: string= '';
  celular: string = '';
  telefone: string = '';
  cargo: string = '';
  unidade: UnidadeResponsavel;
  sexo: string = '';
  perfil: Perfil;

  constructor(){
  }
}
