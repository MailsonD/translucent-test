import { Game } from './../../../model/game.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: [ './game-list.component.css' ]
})
export class GameListComponent implements OnInit {

  @Input() games: Game[];

  constructor() { }

  ngOnInit(): void {
  }

}
