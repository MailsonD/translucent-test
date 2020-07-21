import * as SearchActions from './search.actions';
import * as SearchSelectors from './search.selectors';
import { SearchEffects } from './search.effects';
import { reducer } from './search.reducer';


export const Actions = SearchActions;
export const Reducer = reducer;
export const Selectors = SearchSelectors;
export const Effects = SearchEffects;
