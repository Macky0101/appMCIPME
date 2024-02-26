import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSlides, Platform } from '@ionic/angular';
import { LegendPosition } from '@swimlane/ngx-charts';
import { register } from 'swiper/element/bundle';
register();


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-page-importatrice',
  templateUrl: './page-importatrice.page.html',
  styleUrls: ['./page-importatrice.page.scss'],
})
export class PageImportatricePage implements OnInit {
  swiperModules = [IonicSlides];
  view: any;
  legendPosition!: LegendPosition;
  below: boolean = false;

  constructor(
    private platform: Platform,
    private router: Router,
  ) {}

  ngOnInit() {
    this.changeLegendPostion(false);
    this.handleScreenSizeChange();
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

  PageStocks() {
    this.router.navigate(['/unites-industrie']);
  }

  PageImportation() {
    this.router.navigate(['/localisation-industrie']);
  }

  PageDistributeurs() {
    this.router.navigate(['/statistique']);
  }

  // data table////////////////////////////////////////////////////////////////
  displayedColumns = [
    'name',
    'position',
    'weight',
    'symbol',
    'position',
    'weight',
    'symbol',
    'star',
  ];

  dataSource = ELEMENT_DATA;

  // data table////////////////////////////////////////////////////////////////
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
