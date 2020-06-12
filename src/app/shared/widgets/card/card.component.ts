import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() label: string;
  @Input() src: string;

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    HC_exporting(this.Highcharts)
  }

}
