import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
  @Input() PmeCount : number = 0;
  @Input() EmployersCount : number = 0;
  @Input() DistributorsCount : number = 0;
  single: any[] = [];

  colorScheme = {
    domain: ['#008059', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#017481';
  constructor() {
  }
  ngOnInit() {
    this.updateChartData(this.DistributorsCount, this.EmployersCount, this.PmeCount)
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['DistributorsCount'] || changes['EmployersCount'] || changes['PmeCount']) {
      this.updateChartData(this.DistributorsCount, this.EmployersCount, this.PmeCount);
    }
  }
  updateChartData(DistributorsCount: any, EmployersCount: any, PmeCount: any){
    this.single = [
      {
        "name": "d'unités industrielles",
        "value":this.PmeCount
      },
      {
        "name": "d'emplois créés",
        "value":this.EmployersCount
      },
      {
        "name": "Production totale",
        "value": this.DistributorsCount
      },
      {
        "name": "Contribution au PIB (%)",
        "value": 10
      },
    ];
  }

  onSelect(event : any) {
    console.log(event);
  }
}
