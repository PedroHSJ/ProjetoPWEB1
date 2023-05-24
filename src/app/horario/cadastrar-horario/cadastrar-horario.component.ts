import { Component } from '@angular/core';
import { IHorario } from 'src/app/shared/interfaces/IHorario';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-cadastrar-horario',
  templateUrl: './cadastrar-horario.component.html',
  styleUrls: ['./cadastrar-horario.component.css']
})
export class CadastrarHorarioComponent {
  horario: IHorario;
  usuarios: IUsuario[] = [];
  usuario: IUsuario;

  constructor(private usuarioService: UsuarioService){
    this.horario = {} as IHorario;
    this.usuarios = [] as IUsuario[];
    this.usuario = {} as IUsuario;
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe((usuariosRetornados) => {
      this.usuarios = usuariosRetornados;
    });
  }

  print(){
    console.log(this.horario);
  }
}
