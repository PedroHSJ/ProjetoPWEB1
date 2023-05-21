import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemUsuariosComponent } from './usuario/listagem-usuarios/listagem-usuarios.component';
import { CadastrarUsuarioComponent } from './usuario/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  {
    path: 'usuario/cadastro',
    component: CadastrarUsuarioComponent,
  },
  {
    path: 'usuario/editar/:id',
    component: CadastrarUsuarioComponent,
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
