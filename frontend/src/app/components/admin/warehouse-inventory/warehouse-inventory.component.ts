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
  selector: 'app-warehouse-inventory',
  templateUrl: './warehouse-inventory.component.html',
  styleUrls: ['./warehouse-inventory.component.css'],
})
export class WarehouseInventoryComponent implements OnInit {
  nameData = 'warehouse_inventory';
  listInventory?: Observable<Array<BackEndData.warehouse_inventory>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  private viewData: Record<
    keyof Pick<BackEndData.warehouse_inventory, 'date_holding' | 'count'>,
    Date | number
  > = {
    date_holding: new Date(),
    count: 0,
  };

  private dataSelect: OutputDataSelect = [
    {
      name: 'stock',
      keyValue: 0,
      api: RealApi.STOCK,
    },
  ];

  toAddData() {
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(this.viewData),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.WAREHOUSE_INVENTORY,
    } as ParamsAddView);
  }

  onEditData(data: { id: number; photo?: string }) {
    const info: Partial<{
      id: number;
      photo?: string;
      id_stock: number;
    }> = { ...data };

    const modify = [{ api: RealApi.STOCK, value: info.id_stock }];

    this.dataSelect = util.changeDataSelect(this.dataSelect, modify);

    info.id = undefined;
    info.id_stock = undefined;

    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.WAREHOUSE_INVENTORY,
      Action: Action.UPDATE,
      photo: info.photo,
      id: data.id,
    } as ParamsAddView);
  }

  toStringData(item: BackEndData.warehouse_inventory) {
    return item.date_holding.toString() + ' count: ' + item.count;
  }

  onDelete($event: number) {
    this.listInventory = util.deleteData<BackEndData.warehouse_inventory>(
      RealApi.WAREHOUSE_INVENTORY,
      this.loadingDataService,
      this.listInventory!,
      $event
    );
  }

  ngOnInit(): void {
    this.listInventory = this.loadingDataService.getData<
      Array<BackEndData.warehouse_inventory>
    >(RealApi.WAREHOUSE_INVENTORY);
  }
}
