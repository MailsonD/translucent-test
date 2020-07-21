import { GameDetailsComponent } from './../game-details/game-details.component';
import { MatDialog } from '@angular/material/dialog';
import { Game } from './../../../model/game.model';
import { Component, OnInit, Input } from '@angular/core';
import { formatYearToString } from 'src/app/util/dateFormater';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: [ './game-card.component.css' ]
})
export class GameCardComponent implements OnInit {

  @Input() game: Game;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getFormatedDate(): string {
    return formatYearToString(this.game.year);
  }

  showDetails() {
    this.dialog.open(GameDetailsComponent, {
      data: {
        game: this.game
      }
    });
  }
}
