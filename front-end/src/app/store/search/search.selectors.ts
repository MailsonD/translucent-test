import { SearchState } from './search.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectRootState = createFeatureSelector<SearchState>('searchStore');


export const searchSelector = createSelector(
    selectRootState,
    (state: SearchState) => state
);
