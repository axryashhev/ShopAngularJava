import { Component } from '@angular/core';
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
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css'],
})
export class ShopsComponent {
  nameData = 'shops';
  listShops?: Observable<Array<BackEndData.shop>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {
    this.listShops = this.loadingDataService.getData<Array<BackEndData.shop>>(
      RealApi.SHOP
    );
  }

  private viewData: Record<
    keyof Pick<BackEndData.shop, 'name' | 'phone' | 'email'>,
    string
  > = {
    name: '',
    phone: '',
    email: '',
  };

  private dataSelect: OutputDataSelect = [
    {
      name: 'shipment',
      keyValue: 0,
      api: RealApi.SHIPMENT,
    },
    {
      name: 'request',
      keyValue: 0,
      api: RealApi.REQUEST,
    },
    {
      name: 'products_in_stores',
      keyValue: 0,
      api: RealApi.PRODUCTS_IN_STORES,
    },
    {
      name: 'store_inventory',
      keyValue: 0,
      api: RealApi.STORE_INVENTORY,
    },
    {
      name: 'address',
      keyValue: 0,
      api: RealApi.ADDRESS,
    },
  ];

  toAddData() {
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(this.viewData),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.SHOP,
    } as ParamsAddView);
  }

  onEditData(data: { id: number; photo?: string; status?: boolean }) {
    const info: Partial<Omit<BackEndData.shop, 'phone' | 'name' | 'email'>> = {
      ...data,
    };

    const modify = [
      { api: RealApi.ADDRESS, value: info.id_address },
      { api: RealApi.SHIPMENT, value: info.id_shipment },
      { api: RealApi.REQUEST, value: info.id_request },
      { api: RealApi.PRODUCTS_IN_STORES, value: info.id_products_in_stores },
      { api: RealApi.STORE_INVENTORY, value: info.id_store_inventory },
    ];

    this.dataSelect = util.changeDataSelect(this.dataSelect, modify);

    info.id = undefined;
    info.id_address = undefined;
    info.id_request = undefined;
    info.id_shipment = undefined;
    info.id_store_inventory = undefined;
    info.id_products_in_stores = undefined;
    util.toModifyData(this.router, {
      id: data.id,
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.SHOP,
      Action: Action.UPDATE,
    } as ParamsAddView);
  }

  onDelete($event: number) {
    this.loadingDataService.deleteData(RealApi.SHOP, $event);
    this.listShops = this.loadingDataService.getData<Array<BackEndData.shop>>(
      RealApi.SHOP
    );
  }
}
