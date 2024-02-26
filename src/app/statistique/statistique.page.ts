import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.page.html',
  styleUrls: ['./statistique.page.scss'],
})
export class StatistiquePage implements OnInit {
  view: any;
  legendPosition!: LegendPosition;
  below: boolean = false;
  constructor(
    private platform: Platform
  ) { }

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
}

