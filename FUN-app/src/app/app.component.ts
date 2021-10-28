import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FUN-app';
  counter: number[];
  index: number;

  constructor(){
    this.index = 0;
    this.counter = [this.index];
  }

  public onClick(): void {
    this.index = this.index + 1;
    this.counter.push(this.index);
  }
}
