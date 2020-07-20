import { ComponentsModule } from './../components/components.module';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { NewGameComponent } from './new-game/new-game.component';



@NgModule({
  declarations: [
    PagesComponent,
    CatalogComponent,
    NewGameComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
