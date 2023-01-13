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
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css'],
})
export class ShipmentComponent implements OnInit {
  nameData = 'shipment';
  listShipment?: Observable<Array<BackEndData.shipment>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  private viewData: Record<
    keyof Pick<BackEndData.shipment, 'data_shipment'>,
    Date
  > = {
    data_shipment: new Date(),
  };

  private dataSelect: OutputDataSelect = [
    {
      name: 'shipped_goods',
      keyValue: 0,
      api: RealApi.SHIPPED_GOODS,
    },
  ];
  toStringData(item: BackEndData.shipment) {
    return item.data_shipment.toString();
  }

  toAddData() {
    util.toModifyData(this.router, {
      nameData: this.nameData,
      dataSelect: JSON.stringify(this.dataSelect),
      viewData: JSON.stringify(this.viewData),
      Api: RealApi.SHIPPED_GOODS,
    } as ParamsAddView);
  }

  onEditData(data: { id: number; photo?: string }) {
    const info: Partial<Pick<BackEndData.shipment, 'id_shipped_goods' | 'id'>> =
      { ...data };

    const modify = [
      {
        api: RealApi.SHIPPED_GOODS,
        value: info.id_shipped_goods,
      },
    ];

    this.dataSelect = util.changeDataSelect(this.dataSelect, modify);

    info.id = undefined;
    info.id_shipped_goods = undefined;
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      Api: RealApi.SHIPMENT,
      Action: Action.UPDATE,
      id: data.id,
    } as ParamsAddView);
  }
  onDelete($event: number) {
    this.listShipment = util.deleteData<BackEndData.shipment>(
      RealApi.SHIPMENT,
      this.loadingDataService,
      this.listShipment!,
      $event
    );
  }

  ngOnInit(): void {
    this.listShipment = this.loadingDataService.getData<
      Array<BackEndData.shipment>
    >(RealApi.SHIPMENT);
  }
}
