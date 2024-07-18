import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-character',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    id: '',
    name: '',
    power: 0
  }

  printCharacter(): void {
    if (this.character.name.length === 0) return;
    // this.character.id = uuid();
    console.log(this.character);
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0};
  }

 }
