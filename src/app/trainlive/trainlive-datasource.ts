import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TrainliveItem {
  name: string;
  train: number;
  status:string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TrainliveItem[] = [
  {train: 198793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 298793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 398793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 498793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 598793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 698793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 798793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 898793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 998793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 198793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 198793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 198793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 198793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 198793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 198793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 198793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 198793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 198793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 198793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
  {train: 298793, name: "3A 2A 5A 4B 3S 2M 3D 1S 2S 6B 7D 8D 9E 10F", status:"safe"},
];

/**
 * Data source for the Trainlive view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TrainliveDataSource extends DataSource<TrainliveItem> {
  data: TrainliveItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TrainliveItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TrainliveItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TrainliveItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'train': return compare(+a.train, +b.train, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
