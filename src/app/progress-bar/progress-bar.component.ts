import { Component, Input } from '@angular/core';
@Component({
 selector: 'app-progress-bar',
 templateUrl: './progress-bar.component.html',
 styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
 @Input() value: number = 0; // Valor actual del progreso
 @Input() max: number = 100; // Valor máximo del progreso
}
