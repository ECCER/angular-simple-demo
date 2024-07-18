import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>

  <button (click)="increaseBy(+3)">Add</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>`
})


export class CounterComponent {

  counter: number;
  initialValue: number;

  constructor() {
    this.counter = 10;
    this.initialValue = this.counter;
   }

   increaseBy( add: number): void {
    this.counter += add;
   }

   reset(): void {
    this.counter = this.initialValue;
   }

}
