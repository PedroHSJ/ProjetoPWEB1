import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  URL_USUARIOS = 'http://localhost:3000/usuarios';
  constructor(private httpClient: HttpClient) {}

  listar(): Observable<IUsuario[]> {
    return this.httpClient.get<IUsuario[]>(this.URL_USUARIOS);
  }

  inserir(usuario: IUsuario): Observable<IUsuario> {
    return this.httpClient.post<IUsuario>(this.URL_USUARIOS, usuario);
  }

  atualizar(usuario: IUsuario): Observable<IUsuario> {
    console.log('oi')
    return this.httpClient.put<IUsuario>(
      `${this.URL_USUARIOS}/${usuario.id}`,
      usuario
    );
  }

  apagar(id: number): Observable<IUsuario> {
    return this.httpClient.delete<IUsuario>(`${this.URL_USUARIOS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<IUsuario> {
    return this.httpClient.get<IUsuario>(`${this.URL_USUARIOS}/${id}`);
  }
}
