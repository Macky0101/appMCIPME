import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-distributeurs',
  templateUrl: './page-distributeurs.page.html',
  styleUrls: ['./page-distributeurs.page.scss'],
})
export class PageDistributeursPage implements OnInit {

  constructor(
    private router : Router,

  ) { }

  ngOnInit() {
  }
  PageDetailDistributeur(){
    this.router.navigate(['page-datail-distributeurs']);
  }
}
