import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
  ) {}

  cocteleslog() {
    this.router.navigate(['/cocteles']);
  }

  cervezaslog() {
    this.router.navigate(['/cervezas']);
  }

  vinoslog() {
    this.router.navigate(['/vinos']);
  }

  chupitoslog() {
    this.router.navigate(['/chupitos']);
  }

  mocktailslog() {
    this.router.navigate(['/mocktails']);
  }

  gazeosaslog() {
    this.router.navigate(['/gazeosas']);
  }
}
