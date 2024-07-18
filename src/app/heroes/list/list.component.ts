import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  deletedHero?: string;

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  deleteLast() {
    this.deletedHero = this.heroNames.pop();
  }

}
