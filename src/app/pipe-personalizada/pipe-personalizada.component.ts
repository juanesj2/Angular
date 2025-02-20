import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LetrasPipe } from './letras.pipe';

@Component({
  selector: 'app-pipe-personalizada',
  imports: [RouterOutlet, LetrasPipe],
  templateUrl: './pipe-personalizada.component.html',
  styleUrl: './pipe-personalizada.component.css'
})
export class PipePersonalizadaComponent {
    vector = [1,2,3,4,5,6,7];
}
