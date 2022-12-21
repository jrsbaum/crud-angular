import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}
  ngOnInit(): void {}
  deslogar() {
    this.usuarioService.deslogar();
  }
}
