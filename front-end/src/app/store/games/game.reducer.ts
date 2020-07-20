import { RequestStatus } from './../request-status';
import { GameState, LoadedGames } from './game.state';
import * as Actions from './game.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: GameState = {
    loadedGames: {
        games: [],
        requestStatus: RequestStatus.STOPED
    },
    registerGame: {
        requestStatus: RequestStatus.STOPED
    }
};


const _loadedGamesReducer = createReducer(
    initialState.loadedGames,

    on(Actions.fetchGames, (state) => {
        return {
            ...state,
            requestStatus: RequestStatus.PROGRESS
        };
    }),

    on(Actions.fetchGamesSuccess, (state, newState) => {
        return {
            games: newState.result,
            requestStatus: RequestStatus.SUCCESS
        };
    }),

    on(Actions.fetchGamesFailed, (state) => {
        return {
            ...state,
            requestStatus: RequestStatus.FAILED
        };
    }),

    on(Actions.clearGameState, (state) => {
        return initialState.loadedGames;
    })
);

const _registerGameReducer = createReducer(
    initialState.registerGame,
);

export function reducer(state: GameState | undefined, action: Action) {
    if (!state) {
        return {
            loadedGames: _loadedGamesReducer(initialState.loadedGames, action),
            registerGame: _registerGameReducer(initialState.registerGame, action),
        };
    }
    return {
        loadedGames: _loadedGamesReducer(state.loadedGames, action),
        registerGame: _registerGameReducer(state.registerGame, action),
    };
}
