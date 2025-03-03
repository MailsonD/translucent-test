import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {

  query = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToCatalog(): void {
    this.router.navigate([ 'games' ]);
  }

  goToNewGame(): void {
    this.router.navigate([ 'games/new' ]);
  }

  onSubmitQuery(): void {
    this.router.navigate([ 'games' ], { queryParams: { q: this.query } });
  }

}
