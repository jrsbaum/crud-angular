import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  isHome = false;
  isListar = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  deslogar() {
    this.usuarioService.deslogar();
  }

  home() {
    this.isHome = true;
    this.isListar = false;
  }
  itens() {
    this.isListar = true;
    this.isHome = false;
  }
}
