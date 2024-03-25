import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSlides, Platform } from '@ionic/angular';
import { LegendPosition } from '@swimlane/ngx-charts';
import { register } from 'swiper/element/bundle';
import { StatisticsService } from '../services/statistics.service';

register();
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];
  view: any;
  legendPosition!: LegendPosition;
  below: boolean = false;

  EmployersCount: number = 0;
  DistributorsCount:number = 0;
  PmeCount:number = 0;
  availableYears: number[] = [];
 selectedYear: number = new Date().getFullYear();

  constructor(
    private platform: Platform,
    private router : Router,
    private statistics : StatisticsService,
  ) {}

  ngOnInit () {
    this.changeLegendPostion(false);
    this.handleScreenSizeChange();
    this.getAvailableYears();
    // this.statistics.getStatistics().subscribe(
    //   response => {
    //     const data = response.data[0];
    //     this.statistics = data;
    //     this.EmployersCount = data.EmployersCount;
    //     this.DistributorsCount = data.DistributorsCount;
    //     this.PmeCount = data.PmeCount;
    //     console.log('mes data', this.PmeCount);
    //   },
    //   error => {
    //     console.error('Erreur lors de la récupération des statistiques', error);
    //   }
    // );
this.updateStatistics();
  }
  updateStatistics() {
    // Récupérer les statistiques pour l'année sélectionnée
    this.statistics.getStatisticsByYear(this.selectedYear).subscribe(
      response => {
        const data = response.data[0];
        // Mettre à jour les données dans le composant
        this.EmployersCount = data.EmployersCount;
        this.DistributorsCount = data.DistributorsCount;
        this.PmeCount = data.PmeCount;
      },
      error => {
        console.error('Erreur lors de la récupération des statistiques', error);
      }
    );
  }
  getAvailableYears() {
    // Logique pour récupérer les années disponibles, par exemple, à partir de vos données ou en définissant une plage d'années fixe
    // Exemple: supposons que vous souhaitez fournir les années de 2010 à l'année actuelle
    const currentYear = new Date().getFullYear();
    for (let year = 2010; year <= currentYear; year++) {
      this.availableYears.push(year);
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleScreenSizeChange();
  }

  changeLegendPostion(defaultValue = true) {
    this.legendPosition = defaultValue ? LegendPosition.Right : LegendPosition.Below;
    this.below = !defaultValue;
  }

  handleScreenSizeChange() {
    const width = this.platform.width();
    const height = this.platform.height();
    console.log(width, height);
    if (width > height) {
      this.changeLegendPostion();
      this.view = [0.9 * width, 0.9 * height];
    } else {
      this.changeLegendPostion(false);
      this.view = [0.95 * width, 0.35 * height];
    }
  }
  PageIndustrie(){
    this.router.navigate(['/unites-industrie']);
  }
  PageLocalisation(){
    this.router.navigate(['/localisation-industrie']);

  }
  statistique(){
    this.router.navigate(['/statistique']);
  }
}


