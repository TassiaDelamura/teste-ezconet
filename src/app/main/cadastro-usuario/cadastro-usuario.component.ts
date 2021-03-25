import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/shared/services/usuarios/models/usuario-model';
import { UsuarioService } from 'src/app/shared/services/usuarios/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
  providers: [UsuarioService]
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  public form = this._formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    dataNascimento: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', []],
    sexo: ['', [Validators.required]],
  });

  public salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      alert('Preencha os campos em vermelho');
    } else {

      //obtém o valor do formuário
      const formValue = this.form.value;

      //cria o modelo do serviço
      const usuario = new UsuarioModel(
        formValue.nome,
        new Date(formValue.dataNascimento),
        formValue.email,
        formValue.senha,
        formValue.sexo);

      //chama o serviço para adicionar o usuário
      this._usuarioService.adicionarUsuario(usuario);

      //reseta o formulário para o próximo cadastro
      this.form.reset({
        nome: '',
        dataNascimento: '',
        email: '',
        senha: '',
        sexo: ''
      });

      alert('O cadastro foi concluído com sucesso');
    }
  }

  public obterClasseDeValidacao(controlName: string): string {

    if (!this.form.controls[controlName].touched) {
      return '';
    }

    if (this.form.controls[controlName].valid) {
      return 'is-valid';
    }

    return 'is-invalid';
  }

}


