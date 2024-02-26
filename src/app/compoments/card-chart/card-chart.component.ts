import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule],
})
export class CardChartComponent  implements OnInit {
  showLabels: boolean = true;

  @Input() view: any;
  @Input() legendPosition = LegendPosition.Right;
  single: any[] = [];

  colorScheme = {
    domain: ['#008059', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#017481';
  constructor() {
  }
  ngOnInit() {
    this.single = [
      {
        "name": "d'unités industrielles",
        "value": 8940
      },
      {
        "name": "d'emplois créés",
        "value": 5000
      },
      {
        "name": "Production totale",
        "value": 7200
      },
      {
        "name": "Contribution au PIB (%)",
        "value": 10
      },
      // {
      //   "name": "Italy",
      //   "value": 7700000
      // },
      // {
      //   "name": "Spain",
      //   "value": 4300000
      // }
    ];
  }

  onSelect(event : any) {
    console.log(event);
  }
}
