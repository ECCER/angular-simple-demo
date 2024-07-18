import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListCharactersComponent {

  @Output()
  onDeleteIndex: EventEmitter<string> = new EventEmitter();

  @Input()
  characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 1500
  }]

  onDeleteCharacter(deleteIndex?: string ): void{
    if( !deleteIndex ) return;
    this.onDeleteIndex.emit(deleteIndex);
  }

 }
