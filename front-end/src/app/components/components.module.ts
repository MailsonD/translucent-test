import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AutocompleteSearchComponent } from './autocomplete-search/autocomplete-search.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { GameCardComponent } from './game/game-card/game-card.component';
import { GameDetailsComponent } from './game/game-details/game-details.component';
import { GameListComponent } from './game/game-list/game-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AutocompleteSearchComponent,
    GameCardComponent,
    GameDetailsComponent,
    GameListComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GameListComponent
  ]
})
export class ComponentsModule { }
