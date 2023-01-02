import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  constructor(private usuarioService: UsuarioService) {}

  deslogar() {
    this.usuarioService.deslogar();
  }
}
