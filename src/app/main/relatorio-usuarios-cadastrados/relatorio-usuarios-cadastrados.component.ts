import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuarioModel } from 'src/app/shared/services/usuarios/models/usuario-model';
import { UsuarioService } from 'src/app/shared/services/usuarios/usuario.service';

@Component({
  selector: 'app-relatorio-usuarios-cadastrados',
  templateUrl: './relatorio-usuarios-cadastrados.component.html',
  styleUrls: ['./relatorio-usuarios-cadastrados.component.scss'],
  providers: [UsuarioService]
})
export class RelatorioUsuariosCadastradosComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  public filtrado: boolean = false;
  public usuarios: Array<UsuarioModel> = [];

  public form = this._formBuilder.group({
    nome: ['', []],
    ativo: ['', []],
  });

  public limpar(): void {
    this.form.reset({
      nome: '',
      ativo: '',
    });
  }

  public filtrar(): void {

    const filtrarPeloNome: string = this.form.controls['nome'].value;
    const filtrarPorAtivo: string = this.form.controls['ativo'].value;

    this.usuarios = this._usuarioService
      .obterUsuarios()
      .filter(usuario => {

        //se filtrarPeloNome tiver um valor, significa que foi informado o valor na tela
        if (filtrarPeloNome != '') {
          //verifica se não existe o valor digitado no nome do usuário
          if (!usuario.nome.toLocaleLowerCase().includes(filtrarPeloNome.toLocaleLowerCase())) {
            //retorna falso, caso não contenha o valor digitado
            return false;
          }
        }

        //se filtrarPorAtivo tiver um valor, significa que foi informado o valor na tela
        if (filtrarPorAtivo != '') {
          //verifica se o valor informado é diferente do usuário
          if (!usuario.ativo == JSON.parse(filtrarPorAtivo)) {
            //retorna falso, caso o valor for diferente do usuário
            return false;
          }
        }

        return true;
      });

    this.filtrado = true;
  }

  public obterDescricaoAtivo(valor: boolean): string {
    return valor ? 'Sim' : 'Não';
  }

  public obterDescricaoSexo(letra: string): string {
    if (letra == 'F') {
      return 'Feminino';
    }

    if (letra == 'M') {
      return 'Masculino';
    }

    return 'Não informado';
  }

  public obterDataFormatoLocal(data: Date | string): string {
    if (typeof data == 'string') {
      data = new Date(data);
    }

    return data.toLocaleDateString();
  }

  public ativar(usuario: UsuarioModel): void {
    usuario.ativo = true;
    this._usuarioService.ativarUsuario(usuario.id);
  }

  public desativar(usuario: UsuarioModel): void {
    usuario.ativo = false;
    this._usuarioService.desativarUsuario(usuario.id);
  }

  public obterClasseBadge(usuario: UsuarioModel): string {
    if (usuario.ativo) {
      return 'badge-success';
    }

    return 'badge-danger';
  }
}
