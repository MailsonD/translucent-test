import { Game } from './../../model/game.model';
import { Observable, Subscription } from 'rxjs';
import { GameState, LoadedGames } from './../../store/games/game.state';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions as GameActions, Selectors as GameSelectors } from '../../store/games';
import { RequestStatus } from 'src/app/store/request-status';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: [ './catalog.component.css' ]
})
export class CatalogComponent implements OnInit, OnDestroy {

  loadedGames: LoadedGames;

  private _games$: Observable<LoadedGames>;

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<GameState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(GameActions.fetchGames());

    this._games$ = this.store.pipe(select(GameSelectors.selectLoadedGames));

    this.subscriptions.push(
      this._games$.subscribe(loadedGames => {
        this.loadedGames = loadedGames;
        console.log('epa');
        console.log(this.loadedGames);
      }
      ));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  isFetching(): boolean {
    return this.loadedGames &&
      this.loadedGames.requestStatus === RequestStatus.PROGRESS ||
      this.loadedGames.requestStatus === RequestStatus.STOPED;
  }

}
