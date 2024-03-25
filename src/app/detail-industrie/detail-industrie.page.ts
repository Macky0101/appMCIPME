import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListUniteInsdustService } from '../services/list-unite-insdust.service';

@Component({
  selector: 'app-detail-industrie',
  templateUrl: './detail-industrie.page.html',
  styleUrls: ['./detail-industrie.page.scss'],
})
export class DetailIndustriePage implements OnInit {
  detailIndustrie: any;
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private uniteIndust : ListUniteInsdustService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const CodeMpme = String(params.get('CodeMpme')); // Convertir en chaîne de caractères
      if (CodeMpme) {
        this.uniteIndust.getDetailIndustrie(CodeMpme).subscribe((data) => {
          this.detailIndustrie = data;
          console.log('DetailIndustrie', this.detailIndustrie);
        }, (error) => {
          console.error('Erreur lors de la récupération des détails de l\'industrie', error);
        });
      } else {
        console.error('Aucun CodeMpme fourni');
      }
    });
  }

}
