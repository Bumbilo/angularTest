import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'tomato',
        width: '150px',
        height: '150px'
      })),
      state('end', style({
        backgroundColor: 'red',
        width: '300px',
        height: '300px'
      })),
      transition('start => end', animate(1500)),
      transition('end => start', animate('800ms 500ms ease-out')),
    ])
  ]
})
export class AppComponent {
  clickedDivState = 'start';

  changeState() {
    if (this.clickedDivState === 'start') {
      this.clickedDivState = 'end';
    } else {
      this.clickedDivState = 'start';
    }
  }

}
