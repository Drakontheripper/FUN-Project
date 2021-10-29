import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FUN-app';
  i: number = 1;
  alphabet: {
    num: number,
    letter: string
  }[];

  constructor(){
    this.alphabet = [{num: 0, letter: '?'}];
  }
  public onClick(): void {
    let fullAlphabet: string[] = ["?","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    if(this.i < fullAlphabet.length){
      this.alphabet.push({num: this.i, letter: fullAlphabet[this.i]});
      this.i = this.i + 1;
    } else if(this.i === fullAlphabet.length){
      this.alphabet.push({num: 204, letter: "Error"});
      this.i = this.i + 1;
    }
  }
}
