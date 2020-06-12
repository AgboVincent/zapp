import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions: {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Workers performance'
      },
      xAxis: {
          categories: ['java', 'javascript', 'Angular', 'c#', 'python']
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Vincent',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Kenneth',
          data: [2, -2, -3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, -2, 5]
      }]
    
  };
  HC_exporting(Highcharts);
  

  setTimeout(() =>{
    window.dispatchEvent(
      new Event ('resize')
    );
  },300);

  }
}
