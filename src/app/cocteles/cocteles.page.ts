import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cocteles',
  templateUrl: './cocteles.page.html',
  styleUrls: ['./cocteles.page.scss'],
})
export class CoctelesPage implements OnInit {

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
  }

  redirect() {
    this.router.navigate(['/tabs/tab/home']);
  }

}
