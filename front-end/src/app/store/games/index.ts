import * as GameActions from './game.actions';
import * as GameSelectors from './game.selectors';
import { GameEffects } from './game.effects';
import { reducer } from './game.reducer';


export const Actions = GameActions;
export const Reducer = reducer;
export const Selectors = GameSelectors;
export const Effects = GameEffects;
