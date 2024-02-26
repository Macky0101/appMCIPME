import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-cabinet',
  templateUrl: './page-cabinet.page.html',
  styleUrls: ['./page-cabinet.page.scss'],
})
export class PageCabinetPage implements OnInit {

  constructor(
    private router : Router,

  ) { }

  ngOnInit() {
  }
  dni(){
    this.router.navigate(['/home']);
  }
  dncic(){
    this.router.navigate(['/dncic']);

  }
}
