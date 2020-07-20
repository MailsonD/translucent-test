import { AppDateAdapter, APP_DATE_FORMATS } from './../../providers/dateAdapterProvider';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

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

  constructor() { }

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

  get f() { return this.form.controls; }


}
