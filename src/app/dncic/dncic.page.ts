import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSlides, Platform } from '@ionic/angular';
import { LegendPosition } from '@swimlane/ngx-charts';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-dncic',
  templateUrl: './dncic.page.html',
  styleUrls: ['./dncic.page.scss'],
})
export class DNCICPage implements OnInit {

  swiperModules = [IonicSlides];
  view: any;
  legendPosition!: LegendPosition;
  below: boolean = false;

  constructor(
    private platform: Platform,
    private router : Router,
  ) {}

  ngOnInit () {
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
  PageStocks(){
    this.router.navigate(['/page-stocks']);
  }
  PageImportation(){
    this.router.navigate(['/page-importatrice']);

  }
  PageDistributeurs(){
    this.router.navigate(['/page-distributeurs']);
  }

}
