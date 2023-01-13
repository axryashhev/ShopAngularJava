import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';
import BackEndData from '../../../../models/backEnd/models';
import { LoadingDataService } from '../../../../services/loading-data/loading-data.service';
import Constants from '../../../../constants/constants';
import { Router } from '@angular/router';
import { ParamsAddView } from '../util/add-view/add-view.component';
import Action = Constants.Action;
import RealApi = Constants.RealApi;
import util from '../../../util/util';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  nameData = 'address';
  listAddress?: Observable<Array<BackEndData.address>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  toStringData(item: BackEndData.address) {
    return item.city + ', ' + item.house + ', ' + item.street;
  }

  private viewData: Record<keyof Omit<BackEndData.address, 'id'>, string> = {
    street: '',
    house: '',
    city: '',
  };

  toAddData() {
    this.router
      .navigate(['./admin/add_view'], {
        queryParams: {
          nameData: this.nameData,
          viewData: JSON.stringify(this.viewData),
          Api: RealApi.ADDRESS,
        } as ParamsAddView,
      })
      .then(() => {});
  }

  onEditData(data: { id: number }) {
    const info: Partial<{ id: number }> = { ...data };
    info.id = undefined;
    console.log('data.id: ', data);
    this.router
      .navigate(['./admin/add_view'], {
        queryParams: {
          nameData: this.nameData,
          viewData: JSON.stringify(info),
          Api: RealApi.ADDRESS,
          Action: Action.UPDATE,
          id: data.id,
        } as ParamsAddView,
      })
      .then(() => {});
  }

  onDelete($event: number) {
    console.log('onDelete: ', $event);

    this.listAddress = util.deleteData<BackEndData.address>(
      RealApi.ADDRESS,
      this.loadingDataService,
      this.listAddress!,
      $event
    );
  }

  ngOnInit(): void {
    this.listAddress = this.loadingDataService.getData<
      Array<BackEndData.address>
    >(RealApi.ADDRESS);
  }
}
