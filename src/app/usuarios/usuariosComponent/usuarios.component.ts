import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/model/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios: Usuario[] = [
    { nome: 'Usuário 1', email: 'usuario1@example.com' },
    { nome: 'Usuário 2', email: 'usuario2@example.com' },
    { nome: 'Usuário 3', email: 'usuario3@example.com' }
  ];
  colunas: string[] = ['nome', 'email'];
  exibirFormulario = false;
  novoUsuario: Usuario = new Usuario ();
  

  mostrarFormulario() {
    this.exibirFormulario = !this.exibirFormulario;
    // Implemente o código para mostrar o formulário de cadastro aqui
  }

  adicionarUsuario() {
    this.usuarios.push(this.novoUsuario);
    this.novoUsuario = { nome: '', email: '' };
    this.exibirFormulario = false;
  }
    
}
