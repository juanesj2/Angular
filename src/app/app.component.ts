import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DadoComponent } from './dado/dado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {FormularioReactivoComponent} from './formulario-reactivo/formulario-reactivo.component';
import { FormularioPlantillaComponent } from './formulario-plantilla/formulario-plantilla.component';
import { FormularioBonitoComponent } from './formulario-bonito/formulario-bonito.component';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CardFancyExample } from './card-perro/card-perro.component';
import { DatepickerCustomHeaderExample } from './calendario/calendario.component';
import { PipePersonalizadaComponent } from './pipe-personalizada/pipe-personalizada.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DadoComponent , CronometroComponent, SelectornumericoComponent, ProgressBarComponent, FormularioReactivoComponent, FormularioPlantillaComponent, FormularioBonitoComponent,CardFancyExample, MatButtonModule, MatCardModule, MatToolbarModule, DatepickerCustomHeaderExample, PipePersonalizadaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Este es el juego de los dados
  valor1: number = this.retornarAleatorio()
  valor2: number = this.retornarAleatorio()
  valor3: number = this.retornarAleatorio()
  resultado: string = "";

  retornarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3)
      this.resultado = 'Ganó';
    else
      this.resultado = 'Perdió';
  }

  // Este es el cronometro
  mensaje = '';

  actualizar(t: number) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
  currentProgress: number = 0; // Agregar esta propiedad

  increaseProgress() {
    if (this.currentProgress < 100) {
      this.currentProgress += 10; // Incrementa el progreso en 10
    }
  }
}

//Barra
export class ParentComponent {
  currentProgress = 50;
  increaseProgress() {
  if (this.currentProgress < 100) {
  this.currentProgress += 10;
  }
  }

 }