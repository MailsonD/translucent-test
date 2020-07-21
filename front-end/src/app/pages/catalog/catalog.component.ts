import { SearchState } from './../../store/search/search.state';
import { Game } from './../../model/game.model';
import { Observable, Subscription } from 'rxjs';
import { GameState, LoadedGames } from './../../store/games/game.state';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions as GameActions, Selectors as GameSelectors } from '../../store/games';
import { Actions as SearchActions, Selectors as SearchSelectors } from '../../store/search';
import { RequestStatus } from 'src/app/store/request-status';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: [ './catalog.component.css' ]
})
export class CatalogComponent implements OnInit, OnDestroy {

  loadedGames: LoadedGames;

  query: string;

  page: string;

  private _games$: Observable<LoadedGames>;

  private _search$: Observable<SearchState>;


  private subscriptions: Subscription[] = [];



  constructor(
    private gameStore: Store<GameState>,
    private route: ActivatedRoute,
    private searchStore: Store<SearchState>
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.queryParams.subscribe(params => {
        this.query = params.q;
        if (this.query) {
          this._loadSearch();
        } else {
          this._loadAll();
        }
      })
    );


  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });

    this.gameStore.dispatch(GameActions.clearGameState());
  }

  _loadSearch(): void {

    this.searchStore.dispatch(SearchActions.realizeSearch({ query: this.query }));

    this._search$ = this.searchStore.pipe(select(SearchSelectors.searchSelector));

    this.subscriptions.push(
      this._search$.subscribe(searchState => {
        this.loadedGames = searchState.loadedGames;
        this.page = 'SEARCH';

      })
    );
  }

  _loadAll(): void {

    this.gameStore.dispatch(GameActions.fetchGames());
    this._games$ = this.gameStore.pipe(select(GameSelectors.selectLoadedGames));

    this.subscriptions.push(
      this._games$.subscribe(loadedGames => {
        this.loadedGames = loadedGames;
        this.page = 'LIST';

      }
      )
    );
  }

  isFetching(): boolean {
    if (!this.loadedGames) {
      return true;
    }
    return this.loadedGames &&
      this.loadedGames.requestStatus === RequestStatus.PROGRESS ||
      this.loadedGames.requestStatus === RequestStatus.STOPED;
  }

}
