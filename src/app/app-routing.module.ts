import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { MainNavComponent } from './pages/main-nav/main-nav.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UsuarioNaoAutenticadoGuard],
  },
  {
    path: '',
    component: MainNavComponent,
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((modulo) => modulo.HomeModule),
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'itens',
    loadChildren: () =>
      import('./pages/compartilhado/item/item-listar/item-listar.module').then(
        (modulo) => modulo.ItemListarModule
      ),
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'itens/cadastrar',

    loadChildren: () =>
      import(
        './pages/compartilhado/item/item-cadastrar-editar/item-cadastrar-editar.module'
      ).then((modulo) => modulo.ItemCadastrarEditarModule),
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'itens/editar/:id',
    loadChildren: () =>
      import(
        './pages/compartilhado/item/item-cadastrar-editar/item-cadastrar-editar.module'
      ).then((modulo) => modulo.ItemCadastrarEditarModule),
    canActivate: [UsuarioAutenticadoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
