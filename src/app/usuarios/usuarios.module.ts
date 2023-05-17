import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { UsuariosComponent } from './usuariosComponent/usuarios.component';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [UsuariosComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    MatGridListModule
    // Outros módulos do Material UI que você importou
  ],
  exports: [UsuariosComponent]
})
export class UsuariosModule { }
