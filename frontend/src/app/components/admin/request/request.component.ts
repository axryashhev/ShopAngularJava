import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import BackEndData from '../../../../models/backEnd/models';
import { LoadingDataService } from '../../../../services/loading-data/loading-data.service';
import { Router } from '@angular/router';
import util from '../../../util/util';
import {
  OutputDataSelect,
  ParamsAddView,
} from '../util/add-view/add-view.component';
import Constants from '../../../../constants/constants';
import RealApi = Constants.RealApi;
import Action = Constants.Action;

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  nameData = 'request';
  listRequest?: Observable<Array<BackEndData.request>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  private viewData: Record<
    keyof Omit<BackEndData.request, 'id_products_in_requests' | 'id'>,
    Date | number
  > = {
    date_request: new Date(),
  };

  private dataSelect: OutputDataSelect = [
    {
      name: 'products_in_requests',
      keyValue: 0,
      api: RealApi.PRODUCTS_IN_REQUESTS,
    },
  ];
  toStringData(item: BackEndData.request) {
    return item.date_request.toString();
  }

  toAddData() {
    util.toModifyData(this.router, {
      nameData: this.nameData,
      dataSelect: JSON.stringify(this.dataSelect),
      viewData: JSON.stringify(this.viewData),
      Api: RealApi.REQUEST,
    } as ParamsAddView);
  }

  onEditData(data: { id: number; photo?: string }) {
    const info: Partial<
      Pick<BackEndData.request, 'id' | 'id_products_in_requests'>
    > = { ...data };

    const modify = [
      {
        api: RealApi.PRODUCTS_IN_REQUESTS,
        value: info.id_products_in_requests,
      },
    ];

    this.dataSelect = util.changeDataSelect(this.dataSelect, modify);

    info.id = undefined;
    info.id_products_in_requests = undefined;
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.REQUEST,
      Action: Action.UPDATE,
      id: data.id,
    } as ParamsAddView);
  }

  onDelete($event: number) {
    this.listRequest = util.deleteData<BackEndData.request>(
      RealApi.REQUEST,
      this.loadingDataService,
      this.listRequest!,
      $event
    );
  }

  ngOnInit(): void {
    this.listRequest = this.loadingDataService.getData<
      Array<BackEndData.request>
    >(RealApi.REQUEST);
  }
}
