import { LoadedGames } from './../games/game.state';
import { createReducer, on, Action } from '@ngrx/store';
import { SearchState } from './search.state';
import { RequestStatus } from '../request-status';
import * as Actions from './search.actions';


const initialState: SearchState = {
    loadedGames: {
        requestStatus: RequestStatus.STOPED,
        games: []
    },
    query: ''
};

const _searchReducer = createReducer(
    initialState,

    on(Actions.realizeSearch, () => {
        return {
            loadedGames: {
                requestStatus: RequestStatus.PROGRESS,
                games: []
            },
            query: '',
        };
    }),

    on(Actions.setSearchResult, (state, newState) => {
        return {
            ...state,
            loadedGames: {
                requestStatus: RequestStatus.SUCCESS,
                games: newState.results
            }
        };
    }),

    on(Actions.clearSearchResull, () => {
        return initialState;
    })


);

export function reducer(state: SearchState | undefined, action: Action) {
    return _searchReducer(state, action);
}
