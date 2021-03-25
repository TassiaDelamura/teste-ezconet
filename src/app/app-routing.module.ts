import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './main/cadastro-usuario/cadastro-usuario.component';
import { RelatorioUsuariosCadastradosComponent } from './main/relatorio-usuarios-cadastrados/relatorio-usuarios-cadastrados.component';

const routes: Routes = [
  { path: '', redirectTo: '/cadastro-usuario', pathMatch: 'full' },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'relatorio-usuarios-cadastrados', component: RelatorioUsuariosCadastradosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }