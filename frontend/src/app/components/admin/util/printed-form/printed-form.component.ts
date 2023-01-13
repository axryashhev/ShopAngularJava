import { Component, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LoadingDataService } from '../../../../../services/loading-data/loading-data.service';

@Component({
  selector: 'app-printed-form',
  templateUrl: './printed-form.component.html',
  styleUrls: ['./printed-form.component.css'],
})
export class PrintedFormComponent implements OnInit {
  data?: Observable<Array<Record<string, any>>>;
  columnArr?: Observable<Array<string>>;

  constructor(
    private router: ActivatedRoute,
    private loadingDataService: LoadingDataService
  ) {}

  ngOnInit(): void {
    const item: Observable<Array<Record<string, any>>> =
      this.router.queryParams.pipe(
        switchMap((it: any) =>
          this.loadingDataService.getData<Array<Record<string, any>>>(it.api)
        )
      );
    this.data = item;

    this.columnArr = item.pipe(switchMap(it => of(Object.keys(it[0]))));
  }
}
