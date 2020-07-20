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

  constructor() { }

  ngOnInit(): void {
  }

  getFormatedDate(): string {
    return formatYearToString('2019');
  }
}
