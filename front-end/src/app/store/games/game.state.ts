import { RequestStatus } from './../request-status';
import { Game } from './../../model/game.model';
export interface GameState {
    loadedGames: LoadedGames;
    registerGame: RegisterGame;
}

export interface LoadedGames {
    games: Game[];
    requestStatus: RequestStatus;
}

export interface RegisterGame {
    requestStatus: RequestStatus;

}
