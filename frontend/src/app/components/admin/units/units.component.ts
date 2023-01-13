import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, switchMap, takeUntil } from 'rxjs';
import BackEndData from '../../../../models/backEnd/models';
import { LoadingDataService } from '../../../../services/loading-data/loading-data.service';
import Constants from '../../../../constants/constants';
import { SimpleDataEvent } from '../util/view-simple-data/view-simple-data.component';
import RealApi = Constants.RealApi;
import util from '../../../util/util';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css'],
})
export class UnitsComponent implements OnInit {
  nameData: string = 'units';
  data?: Observable<Array<BackEndData.units>>;

  constructor(private loadingDataService: LoadingDataService) {}
  onAddData($event: SimpleDataEvent) {
    this.data = this.loadingDataService
      .postData(RealApi.UNITS, { name: $event.name })
      .pipe(
        switchMap(() =>
          this.loadingDataService.getData<Array<BackEndData.units>>(
            RealApi.UNITS
          )
        )
      );
  }

  onEditData($event: SimpleDataEvent) {
    this.data = this.loadingDataService
      .updateData(RealApi.UNITS, $event, $event.id)
      .pipe()
      .pipe(
        switchMap(() =>
          this.loadingDataService.getData<Array<BackEndData.units>>(
            RealApi.UNITS
          )
        )
      );
  }

  ngOnInit(): void {
    this.data = this.loadingDataService.getData<Array<BackEndData.units>>(
      RealApi.UNITS
    );
  }

  onDeleteData($event: number) {
    this.data = util.deleteData(
      RealApi.UNITS,
      this.loadingDataService,
      this.data!,
      $event
    );
  }
}
