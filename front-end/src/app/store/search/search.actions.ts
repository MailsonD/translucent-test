import { Game } from 'src/app/model/game.model';
import { createAction, props } from '@ngrx/store';

export const realizeSearch = createAction(
    '[Search] Realize search',
    props<{ query: string }>()
);

export const setSearchResult = createAction(
    '[Search] Set search result',
    props<{ results: Game[] }>()
);

export const clearSearchResull = createAction(
    '[Clear Search] Clear search result'
);

