import { GameState } from './game.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectRootState = createFeatureSelector<GameState>('gameStore');

export const selectLoadedGames = createSelector(
    selectRootState,
    (state: GameState) => state.loadedGames
);

export const selectRegisterGame = createSelector(
    selectRootState,
    (state: GameState) => state.registerGame
);

