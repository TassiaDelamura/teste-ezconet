import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './main/cadastro-usuario/cadastro-usuario.component';
import { RelatorioUsuariosCadastradosComponent } from './main/relatorio-usuarios-cadastrados/relatorio-usuarios-cadastrados.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    RelatorioUsuariosCadastradosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
