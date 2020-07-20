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



export const registerGame = createAction(
    '[Register Game] Register a new game on API',
    props<{ game: Game }>(),
);

export const registerGameFailed = createAction(
    '[Register Game] Register a new game failed'
);

export const registerGameSucces = createAction(
    '[Register Game] Register a new game success'
);

export const clearRegisterGame = createAction(
    '[Clear State] Clear Register Game State'
);

