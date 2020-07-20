import { createAction, props } from '@ngrx/store';
import { Game } from 'src/app/model/game.model';

export const fetchGames = createAction(
    '[Fetch Games] Fetch Games from API',
);

export const fetchGamesFailed = createAction(
    '[Fetch Games] Fetch Games from API Failed'
);

export const fetchGamesSuccess = createAction(
    '[Fetch Games] Fetch Games From API Success',
    props<{ result: Game[] }>(),
);

export const clearGameState = createAction(
    '[Clear State] Clear Game State'
);
