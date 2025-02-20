import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-plantilla',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './formulario-plantilla.component.html',
  styleUrl: './formulario-plantilla.component.css'
})
export class FormularioPlantillaComponent {
    nombre = "";
    apellido = "";
}
