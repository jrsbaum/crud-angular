import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/IUsuario';

const apiUrlUsuario = environment.apiUrl + 'Usuario';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  logar(usuario: IUsuario): Observable<any> {
    /*return this.httpClient.post<any>(apiUrlUsuario + "/login", usuario).pipe(
      tap((resposta) => {
        if(!resposta.sucesso) return;
        localStorage.setItem('token', window.btoa(JSON.stringify(resposta['token'])));
        localStorage.setItem('usuario', window.btoa(JSON.stringify(resposta['usuario'])));
        this.router.navigate(['']);
      }));*/
    return this.mockUsuarioLogin(usuario).pipe(
      tap((resposta) => {
        if (!resposta.sucesso) return;
        localStorage.setItem(
          'token',
          window.btoa(JSON.stringify('TokenQueSeriaGeradoPelaAPI'))
        );
        localStorage.setItem('usuario', window.btoa(JSON.stringify(usuario)));
        this.router.navigate(['']);
      })
    );
  }
  private mockUsuarioLogin(usuario: IUsuario): Observable<any> {
    var retornoMock: any = [];
    if (usuario.email === 'user@email.com' && usuario.senha == '12345') {
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      retornoMock.token = 'TokenQueSeriaGeradoPelaAPI';
      return of(retornoMock);
    }
    retornoMock.sucesso = false;
    retornoMock.usuario = usuario;
    return of(retornoMock);
  }
  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  get obterUsuarioLogado(): IUsuario {
    return localStorage.getItem('usuario')
      ? JSON.parse(window.atob(localStorage.getItem('usuario') as string))
      : null;
  }
  get obterIdUsuarioLogado(): string {
    return localStorage.getItem('usuario')
      ? JSON.parse(window.atob(localStorage.getItem('usuario') as string)).id
      : null;
  }
  get obterTokenUsuario(): string {
    return localStorage.getItem('token')
      ? JSON.parse(window.atob(localStorage.getItem('token') as string))
      : null;
  }
  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
