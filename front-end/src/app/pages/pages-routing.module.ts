import { PagesComponent } from './pages.component';
import { NewGameComponent } from './new-game/new-game.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'games',
        component: CatalogComponent
      },
      {
        path: 'games/new',
        component: NewGameComponent
      },
      {
        path: '',
        redirectTo: 'games',
        pathMatch: 'full'
      },
    ]
  },

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
