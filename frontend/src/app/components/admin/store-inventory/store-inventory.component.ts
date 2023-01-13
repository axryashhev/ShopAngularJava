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
  selector: 'app-store-inventory',
  templateUrl: './store-inventory.component.html',
  styleUrls: ['./store-inventory.component.css'],
})
export class StoreInventoryComponent implements OnInit {
  nameData = 'store_inventory';
  listStoreInventory?: Observable<Array<BackEndData.store_inventory>>;

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
      Api: RealApi.STORE_INVENTORY,
    } as ParamsAddView);
  }

  onEditData(data: { id: number; photo?: string; status?: boolean }) {
    const info: Partial<
      Pick<BackEndData.store_inventory, 'id_invoice' | 'id'>
    > = { ...data };

    const modify = [{ api: RealApi.INVOICE, value: info.id_invoice }];

    this.dataSelect = util.changeDataSelect(this.dataSelect, modify);

    info.id = undefined;
    info.id_invoice = undefined;
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.STORE_INVENTORY,
      Action: Action.UPDATE,
      id: data.id,
    } as ParamsAddView);
  }

  toStringData(item: BackEndData.store_inventory) {
    return 'Invoice: ' + item.id_invoice;
  }

  onDelete($event: number) {
    this.listStoreInventory = util.deleteData<BackEndData.store_inventory>(
      RealApi.STORE_INVENTORY,
      this.loadingDataService,
      this.listStoreInventory!,
      $event
    );
  }

  ngOnInit(): void {
    this.listStoreInventory = this.loadingDataService.getData<
      Array<BackEndData.store_inventory>
    >(RealApi.STORE_INVENTORY);
  }
}
