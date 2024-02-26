import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-line-chart-stocks',
  templateUrl: './line-chart-stocks.component.html',
  styleUrls: ['./line-chart-stocks.component.scss'],
  standalone: true,
  imports: [NgxChartsModule],
})
export class LineChartStocksComponent  implements OnInit {
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  multi : any[] = [];
  @Input() view: any;
  @Input() legendPosition = LegendPosition.Right;
  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() { }

  ngOnInit() {
    this.multi = [
      {
        "name": "Germany",
        "series": [
          {
            "name": "1990",
            "value": 5000
          },
          {
            "name": "2010",
            "value": 7300
          },
          {
            "name": "2011",
            "value": 8940
          }
        ]
      },

      {
        "name": "USA",
        "series": [
          {
            "name": "1990",
            "value": 25000
          },
          {
            "name": "2010",
            "value": 30900
          },
          {
            "name": "2011",
            "value": 311000
          }
        ]
      },

      {
        "name": "France",
        "series": [
          {
            "name": "1990",
            "value": 58000000
          },
          {
            "name": "2010",
            "value": 50000020
          },
          {
            "name": "2011",
            "value": 58000000
          }
        ]
      },
      {
        "name": "UK",
        "series": [
          {
            "name": "1990",
            "value": 57000000
          },
          {
            "name": "2010",
            "value": 62000000
          }
        ]
      }
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
