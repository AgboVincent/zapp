import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator} from '@angular/material';
import { from } from 'rxjs';

export interface names {
  name: string;
  position: number;
  age: number;
  state: string;
}
const PROFILE_DATA: names[] = [
  {position: 1, name: 'Agbo Vincent', age: 24, state: 'Enugu'},
  {position: 2, name: 'Eze john', age: 27, state: 'Imo'},
  {position: 3, name: 'Nwando Amara', age: 26, state: 'Anambra'},
  {position: 4, name: 'Ike kenneth', age: 30, state: 'Enugu'},
  {position: 5, name: 'Omeje Kinglsey', age: 34, state: 'Enugu'},
  {position: 6, name: 'Ugwu John', age: 26, state: 'Anambra'},
  {position: 7, name: 'Ugwuanyi kelechi', age: 34, state: 'Imo'},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<names>(PROFILE_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
