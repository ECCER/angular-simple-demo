import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListCharactersComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListCharactersComponent,
    AddComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
