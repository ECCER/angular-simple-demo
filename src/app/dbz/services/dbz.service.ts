import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1200
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 2000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 1700
    }
  ];

  onNewCharacter(character: Character): void {

    const newCharacter: Character = ({id: uuid(), ...character})
    this.characters.push(newCharacter)
  }

  onDeleteCharacter(id: string): void{
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
