import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService){}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  addCharacter(character: Character) {
    return this.dbzService.onNewCharacter(character);
  }

  removeCharacter(id: string){
    return this.dbzService.onDeleteCharacter(id);
  }

}
