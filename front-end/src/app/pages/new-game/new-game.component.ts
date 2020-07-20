import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { GameState, RegisterGame } from './../../store/games/game.state';
import { AppDateAdapter, APP_DATE_FORMATS } from './../../providers/dateAdapterProvider';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { validateYear, validateFullDate } from 'src/app/util/validateDate';
import { Actions as GameActions, Selectors as GameSelectors } from '../../store/games';
import { RequestStatus } from 'src/app/store/request-status';


@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: [ './new-game.component.css' ],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class NewGameComponent implements OnInit, OnDestroy {

  form: FormGroup;

  consoles = [
    'PS4',
    'XBOX ONE',
    'NINTENDO SWITCH',
  ];

  gameRegister: RegisterGame;

  private _games$: Observable<RegisterGame>;

  private subscriptions: Subscription[] = [];

  constructor(
    private toastr: ToastrService,
    private store: Store<GameState>,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this._games$ = this.store.select(GameSelectors.selectRegisterGame);

    this.subscriptions.push(
      this._games$.subscribe((gameRegister) => {
        this.gameRegister = gameRegister;
        if (gameRegister.requestStatus === RequestStatus.SUCCESS) {
          this.toastr.success('Success', 'The game was registred with succes');
          this.router.navigate([ 'games' ]);
        }
        if (gameRegister.requestStatus === RequestStatus.FAILED) {
          this.toastr.error('Error', 'there was an error in the game registration');
        }
      })
    );

    this.form = new FormGroup({
      title: new FormControl('', [ Validators.required ]),
      year: new FormControl('', [ Validators.required ]),
      console: new FormControl(this.consoles[ 0 ]),
      personalNotes: new FormControl('', [ Validators.required ]),
      completed: new FormControl(false),
      dateOfCompletion: new FormControl(new Date())
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });

    this.store.dispatch(GameActions.clearRegisterGame());
  }

  isNotSubmiting(): boolean {
    if (this.gameRegister) {
      return this.gameRegister.requestStatus !== RequestStatus.PROGRESS;
    }
    return true;
  }

  submit() {
    if (this.form.valid) {
      if (validateYear(this.form.get('year').value)) {
        if (!this.form.get('completed').value) {
          const game = this.form.value;
          delete game.dateOfCompletion;
          this.store.dispatch(GameActions.registerGame({ game }));
        } else {
          if (validateFullDate(this.form.get('dateOfCompletion').value)) {
            this.store.dispatch(GameActions.registerGame({ game: this.form.value }));
          } else {
            this.toastr.info('Failed', 'Please, inform a valid Date for completion');
          }
        }
      } else {
        this.toastr.info('Failed', 'Please inform a valid year for the game');
      }
    } else {
      this.toastr.info('Failed', 'Please fill in the other fields');

    }
  }

  get f() { return this.form.controls; }


}
