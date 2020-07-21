import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { Reducer as GameReducer, Effects as GameEffects } from './store/games';

import { Reducer as SearchReducer, Effects as SearchEffects } from './store/search';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    StoreModule.forRoot({
      gameStore: GameReducer,
      searchStore: SearchReducer,
    }),
    EffectsModule.forRoot([
      GameEffects,
      SearchEffects
    ])
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
