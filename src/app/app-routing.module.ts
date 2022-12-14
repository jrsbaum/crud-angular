import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', component: HomeComponent },
  {
    path: 'itens',
    loadChildren: () =>
      import('./item/item-listar/item-listar.module').then(
        (modulo) => modulo.ItemListarModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((modulo) => modulo.LoginModule),
  },
  {
    path: 'itens/cadastrar',
    loadChildren: () =>
      import('./item/item-cadastrar-editar/item-cadastrar-editar.module').then(
        (modulo) => modulo.ItemCadastrarEditarModule
      ),
  },
  {
    path: 'itens/editar/:id',
    loadChildren: () =>
      import('./item/item-cadastrar-editar/item-cadastrar-editar.module').then(
        (modulo) => modulo.ItemCadastrarEditarModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
