import { GamesService } from './../../services/games.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as GameActions from './game.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class GameEffects {

    fetchGames$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(GameActions.fetchGames),
        mergeMap(() => this.gamesService.fetchAllGames()
            .pipe(
                map(games => {
                    return GameActions.fetchGamesSuccess({ result: games });
                }),
                catchError(() => of(GameActions.fetchGamesFailed()))
            )
        ))
    );

    registerGame$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(GameActions.registerGame),
        mergeMap((action) => this.gamesService.registerGame(action.game)
            .pipe(
                map(() => {
                    return GameActions.registerGameSucces();
                }),
                catchError(() => of(GameActions.registerGameFailed()))
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private gamesService: GamesService,
    ) { }
}
