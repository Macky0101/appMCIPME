import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition, NgxChartsModule, } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule]
})
export class HorizontalBarChartComponent  implements OnInit {
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';
  @Input()view: any;
  @Input()legendPosition = LegendPosition.Below;
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  single: any[]=[];

  constructor() { }

  ngOnInit() {
    this.single = [
      {
        "name": "Janv",
        "value": 1000
      },
      {
        "name": "Fev",
        "value": 2000
      },
      {
        "name": "Mars",
        "value": 3000
      },
      {
        "name": "Avril",
        "value": 2500
      },
      {
        "name": "Mai",
        "value": 4500
      },
      {
        "name": "juin",
        "value": 4000
      },
      {
        "name": "juillet",
        "value": 1500
      },
      {
        "name": "Août",
        "value": 3433
      },
      {
        "name": "Septembre",
        "value": 6000
      },
      {
        "name": "Octobre",
        "value": 5000
      },
      {
        "name": "Noviembre",
        "value": 5500
      },
      {
        "name": "Décembre",
        "value": 5100
      },
    ];
  }
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
