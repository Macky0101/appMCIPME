import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListUniteInsdustService } from '../services/list-unite-insdust.service';

@Component({
  selector: 'app-unites-industrie',
  templateUrl: './unites-industrie.page.html',
  styleUrls: ['./unites-industrie.page.scss'],
})
export class UnitesIndustriePage implements OnInit {
  ListeInsdust:any;
  constructor(
    private router : Router,
    private UniteIndust : ListUniteInsdustService
  ) { }

  ngOnInit() {
    this.getAllUniteIndust();
  }

  getAllUniteIndust(){
    this.UniteIndust.getListUniteInsdust().subscribe(
      response =>{
         this.ListeInsdust = response.data
        console.log('listeInsdust',this.ListeInsdust);
      },
      error =>{
        console.log('Erreur lors de la récupération des unite industriel', error);
      }
    );
  }

  PageDetailUsine(CodeMpme : number){
    this.router.navigate(['/detail-industrie', CodeMpme]);
  }
}
