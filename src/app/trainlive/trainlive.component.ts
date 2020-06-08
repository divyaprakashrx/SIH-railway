import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { TrainliveDataSource, TrainliveItem } from './trainlive-datasource';


@Component({
  selector: 'app-trainlive',
  templateUrl: './trainlive.component.html',
  styleUrls: ['./trainlive.component.scss']
})

export class TrainliveComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TrainliveItem>;
  dataSource: TrainliveDataSource;
  constructor(private router: Router) {
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['train', 'name', 'status', 'location'];

  ngOnInit() {
    this.dataSource = new TrainliveDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  run(){
    x = 35.2352;
    y = 45.5435;
    this.router.navigate([`/map`]);
    }
}

export let x = 25.5941;
export let y = 85.1376;
