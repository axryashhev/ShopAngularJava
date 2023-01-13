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
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  nameData = 'stock';
  listStock?: Observable<Array<BackEndData.stock>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  private dataSelect: OutputDataSelect = [
    {
      name: 'app_user',
      keyValue: 0,
      api: RealApi.APP_USER,
    },
    {
      name: 'address',
      keyValue: 0,
      api: RealApi.ADDRESS,
    },
    {
      name: 'product',
      keyValue: 0,
      api: RealApi.PRODUCTS,
    },
  ];

  toStringData(item: BackEndData.stock) {
    return item.id_address + ' ' + item.id_product + ' ' + item.id_user + ' ';
  }

  toAddData() {
    util.toModifyData(this.router, {
      nameData: this.nameData,
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.STOCK,
    } as ParamsAddView);
  }

  onEditData(data: { id: number; photo?: string }) {
    const info: Partial<
      Pick<BackEndData.stock, 'id_address' | 'id_user' | 'id_product' | 'id'>
    > = { ...data };
    const modify = [
      { api: RealApi.ADDRESS, value: info.id_address },
      { api: RealApi.APP_USER, value: info.id_user },
      { api: RealApi.PRODUCTS, value: info.id_product },
    ];

    this.dataSelect = util.changeDataSelect(this.dataSelect, modify);

    util.toModifyData(this.router, {
      nameData: this.nameData,
      id: data.id,
      Api: RealApi.STOCK,
      Action: Action.UPDATE,
      dataSelect: JSON.stringify(this.dataSelect),
    } as ParamsAddView);
  }

  onDelete($event: number) {
    this.listStock = util.deleteData<BackEndData.stock>(
      RealApi.STOCK,
      this.loadingDataService,
      this.listStock!,
      $event
    );
  }

  ngOnInit(): void {
    this.listStock = this.loadingDataService.getData<Array<BackEndData.stock>>(
      RealApi.STOCK
    );
  }
}
