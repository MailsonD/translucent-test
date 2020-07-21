import { GamesService } from './../../services/games.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of, EMPTY } from 'rxjs';
import * as SearchActions from './search.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class SearchEffects {

    searchGames$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(SearchActions.realizeSearch),
        mergeMap((action) => this.gamesService.searchGamesByTitle(action.query)
            .pipe(
                map(games => {
                    return SearchActions.setSearchResult({ results: games });
                }),
                catchError(() => EMPTY)
            )
        ))
    );

    constructor(
        private actions$: Actions,
        private gamesService: GamesService,
    ) { }
}
