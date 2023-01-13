import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import BackEndData from '../../../../models/backEnd/models';
import { LoadingDataService } from '../../../../services/loading-data/loading-data.service';
import { Router } from '@angular/router';
import {
  OutputDataSelect,
  ParamsAddView,
} from '../util/add-view/add-view.component';
import util from '../../../util/util';
import Constants from '../../../../constants/constants';
import RealApi = Constants.RealApi;
import Action = Constants.Action;

@Component({
  selector: 'app-products-in-requests',
  templateUrl: './products-in-requests.component.html',
  styleUrls: ['./products-in-requests.component.css'],
})
export class ProductsInRequestsComponent implements OnInit {
  nameData = 'products_in_requests';
  listProductInRequest?: Observable<Array<BackEndData.products_in_requests>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  private dataSelect: OutputDataSelect = [
    {
      name: 'invoice',
      keyValue: 0,
      api: RealApi.INVOICE,
    },
  ];

  toAddData() {
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify({}),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.PRODUCTS_IN_REQUESTS,
    } as ParamsAddView);
  }

  onEditData(data: { id: number; photo?: string; status?: boolean }) {
    const info: Partial<
      Pick<BackEndData.products_in_requests, 'id_invoice' | 'id'>
    > = { ...data };

    const modify = [{ api: RealApi.INVOICE, value: info.id_invoice }];

    this.dataSelect = util.changeDataSelect(this.dataSelect, modify);

    info.id = undefined;
    info.id_invoice = undefined;
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.PRODUCTS_IN_REQUESTS,
      id: data.id,
      Action: Action.UPDATE,
    } as ParamsAddView);
  }

  toStringData(item: BackEndData.products_in_requests) {
    return 'Invoice: ' + item.id_invoice;
  }

  onDelete($event: number) {
    this.listProductInRequest = util.deleteData<BackEndData.products_in_stores>(
      RealApi.PRODUCTS_IN_REQUESTS,
      this.loadingDataService,
      this.listProductInRequest!,
      $event
    );
  }

  ngOnInit(): void {
    this.listProductInRequest = this.loadingDataService.getData<
      Array<BackEndData.products_in_stores>
    >(RealApi.PRODUCTS_IN_REQUESTS);
  }
}
