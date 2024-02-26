import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unites-industrie',
  templateUrl: './unites-industrie.page.html',
  styleUrls: ['./unites-industrie.page.scss'],
})
export class UnitesIndustriePage implements OnInit {

  constructor(
    private router : Router,

  ) { }

  ngOnInit() {
  }
  PageDetailUsine(){
    this.router.navigate(['detail-industrie']);
  }
}
