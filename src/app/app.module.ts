import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounerModule } from './counter/counter.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounerModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
