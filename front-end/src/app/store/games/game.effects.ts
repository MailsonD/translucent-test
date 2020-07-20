import { GamesService } from './../../services/games.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as GameActions from './game.actions';

@Injectable()
export class GameEffects {

    fetchGames$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(GameActions.fetchGames),
    ));

    constructor(
        private actions$: Actions,
        private gamesService: GamesService,
    ) { }
}
