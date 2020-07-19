import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<h1>Hello World!</h1>`
})
export class AppComponent implements OnInit {
  title = 'Games Shelf';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log('opa');
    this.httpClient.get('https://gamesshelf.herokuapp.com/games').subscribe(res => {
      console.log('epa');
      console.log(res);
    });
  }


}
