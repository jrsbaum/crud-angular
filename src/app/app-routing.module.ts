import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './pages/compartilhado/main-nav/main-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainNavComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'itens',
    loadChildren: () =>
      import('./pages/compartilhado/item/item-listar/item-listar.module').then(
        (modulo) => modulo.ItemListarModule
      ),
  },
  {
    path: 'itens/cadastrar',
    loadChildren: () =>
      import(
        './pages/compartilhado/item/item-cadastrar-editar/item-cadastrar-editar.module'
      ).then((modulo) => modulo.ItemCadastrarEditarModule),
  },
  {
    path: 'itens/editar/:id',
    loadChildren: () =>
      import(
        './pages/compartilhado/item/item-cadastrar-editar/item-cadastrar-editar.module'
      ).then((modulo) => modulo.ItemCadastrarEditarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
