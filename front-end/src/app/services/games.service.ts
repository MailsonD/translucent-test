import { HttpClient } from '@angular/common/http';
import { Game } from './../model/game.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchAllGames(): Observable<Game[]> {
    return this.httpClient.get(`${env.API_URL}/games`)
      .pipe(map(result => result as Game[]));
  }

  searchGamesByTitle(query: string): Observable<Game[]> {
    return this.httpClient.get(`${env.API_URL}/games`, {
      params: {
        query
      }
    }).pipe(map(result => result as Game[]));
  }

  registerGame(game: Game): Observable<any> {
    return this.httpClient.post(`${env.API_URL}/games`, game);
  }

}
