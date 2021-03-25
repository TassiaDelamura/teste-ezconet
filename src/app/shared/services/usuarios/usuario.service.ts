import { Injectable } from '@angular/core';
import { UsuarioModel } from './models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  private _key: string = 'usuarios';

  public adicionarUsuario(usuario: UsuarioModel): void {

    //obtém a lista de usuários existentes ou uma nova
    const usuarios = JSON.parse(localStorage.getItem(this._key) || '[]');

    //adiciona o usuário na lista
    usuarios.push(usuario);

    //atualiza os usuários no local storage
    localStorage.setItem(this._key, JSON.stringify(usuarios));
  }

  public obterUsuarios(): Array<UsuarioModel> {
    //obtém a lista de usuários existentes ou uma nova
    return JSON.parse(localStorage.getItem(this._key) || '[]');
  }

  //buscando pelo id 
  public ativarUsuario(id: string): void {
    //aqui só obtém a lista de usuários, pois estamos trabalhando com localstorage, 
    //  chamando uma api, não precisaria
    const usuarios = this.obterUsuarios();
    const usuario = usuarios.find(x => x.id == id);

    //Se o usuário não existir, gera uma exceção
    if (usuario == null) {
      throw 'Usuário não encontrado';
    }

    //altera o ativo do usuário
    usuario.ativo = true;

    //atualiza o localstorage
    localStorage.setItem(this._key, JSON.stringify(usuarios));
  }

  //estou buscando pelo id 
  public desativarUsuario(id: string): void {
    //aqui só obtém a lista de usuários, pois estamos trabalhando com localstorage, 
    //  chamando uma api, não precisaria
    const usuarios = this.obterUsuarios();
    const usuario = usuarios.find(x => x.id == id);

    //Se o usuário não existir, gera uma exceção
    if (usuario == null) {
      throw 'Usuário não encontrado';
    }

    //altera o ativo do usuário
    usuario.ativo = false;

    //atualiza o localstorage
    localStorage.setItem(this._key, JSON.stringify(usuarios));
  }
}
