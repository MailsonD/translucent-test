import { AppDateAdapter, APP_DATE_FORMATS } from './../../providers/dateAdapterProvider';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { validateYear, validateFullDate } from 'src/app/util/validateDate';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: [ './new-game.component.css' ],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class NewGameComponent implements OnInit {

  form: FormGroup;

  consoles = [
    'PS4',
    'XBOX ONE',
    'NINTENDO SWITCH',
  ];

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [ Validators.required ]),
      year: new FormControl('', [ Validators.required ]),
      console: new FormControl(this.consoles[ 0 ]),
      personalNotes: new FormControl('', [ Validators.required ]),
      completed: new FormControl(false),
      dateOfCompletion: new FormControl(new Date())
    });
  }

  submit() {
    if (this.form.valid) {
      if (validateYear(this.form.get('year').value)) {
        if (!this.form.get('completed').value) {
          this.toastr.success('Success', 'The game was registred with success!');
        } else {
          if (validateFullDate(this.form.get('dateOfCompletion').value)) {
            this.toastr.success('Success', 'The game was registred with success!');

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
