import { LoadedGames } from './../games/game.state';

export interface SearchState {
    loadedGames: LoadedGames;
    query: string;
}
