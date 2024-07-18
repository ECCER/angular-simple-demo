import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription() {
    return `${ this.name } - ${ this.age }`
  }

  changeName( name: string = 'Deadpool'): void {
    this.name = name;
  }

  changeAge( age: number = 27): void {
    this.age = age;
  }

  resetForm() {
    this.name = 'ironman'
    this.age  = 45
  }

}
