import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-card-perro',
  templateUrl: './card-perro.component.html',
  styleUrl: 'card-perro.component.css',
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFancyExample {
  @Input() titulo: string = ""
  @Input() subtitulo: string = ""
  @Input() misrc: string = ""
  @Input() mialt: string = ""
  @Input() texto: string = ""
  @Input() likes : number = 0;
  liked: boolean = false;

  like(){
    if(this.liked){
      this.likes--
      this.liked=false
    }else{
      this.likes++;
      this.liked=true;
    }
    
    
  }

}