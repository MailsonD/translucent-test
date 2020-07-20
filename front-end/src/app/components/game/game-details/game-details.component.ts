import { formatYearToString } from 'src/app/util/dateFormater';
import { Game } from './../../../model/game.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DetailData {
  game: Game;
}

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: [ './game-details.component.css' ]
})
export class GameDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DetailData) { }

  ngOnInit(): void {
  }

  getFormatedDate(): string {
    return formatYearToString(this.data.game.year);
  }

  getFormatedCompleted(): string {
    return this.data.game.completed ? 'Yes' : 'No';
  }

}
