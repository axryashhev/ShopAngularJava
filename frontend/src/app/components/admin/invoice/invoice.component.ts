import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import BackEndData from '../../../../models/backEnd/models';
import { LoadingDataService } from '../../../../services/loading-data/loading-data.service';
import { Router } from '@angular/router';
import {
  OutputDataSelect,
  ParamsAddView,
  StatusData,
} from '../util/add-view/add-view.component';
import util from '../../../util/util';
import Constants from '../../../../constants/constants';
import RealApi = Constants.RealApi;
import Action = Constants.Action;

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  nameData = 'invoice';
  listInvoice?: Observable<Array<BackEndData.invoice>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  private viewData: Record<
    keyof Pick<BackEndData.invoice, 'price'>,
    string | boolean
  > = {
    price: '',
  };

  private dataSelect: OutputDataSelect = [
    {
      name: 'appointment',
      keyValue: 0,
      api: RealApi.APPOINTMENT,
    },
    {
      name: 'confirmation_note',
      keyValue: 0,
      api: RealApi.CONFIRMATION_NOTE,
    },
    {
      name: 'provider',
      keyValue: 0,
      api: RealApi.PROVIDER,
    },
  ];

  toAddData() {
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(this.viewData),
      dataSelect: JSON.stringify(this.dataSelect),
      status: JSON.stringify({
        name: 'Статус потвержения',
        value: false,
        nameKey: 'accounted',
      } as StatusData),
      Api: RealApi.INVOICE,
    } as ParamsAddView);
  }

  onEditData(data: { id: number; photo?: string; status?: boolean }) {
    const info: Partial<Omit<BackEndData.invoice, 'price'>> = { ...data };

    const modify = [
      { api: RealApi.APPOINTMENT, value: info.id_appointment },
      { api: RealApi.CONFIRMATION_NOTE, value: info.id_confirmation_note },
      { api: RealApi.PROVIDER, value: info.id_provider },
    ];

    this.dataSelect = util.changeDataSelect(this.dataSelect, modify);
    const status = info.accounted;
    console.log('status: ', status);

    info.id = undefined;
    info.id_appointment = undefined;
    info.id_confirmation_note = undefined;
    info.id_provider = undefined;
    info.accounted = undefined;
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.ADDRESS,
      Action: Action.UPDATE,
      id: data.id,
      status: JSON.stringify({
        value: status,
        name: 'Статус потвержения',
        nameKey: 'accounted',
      } as StatusData),
    } as ParamsAddView);
  }

  toStringData(item: BackEndData.invoice) {
    return item.price;
  }

  onDelete($event: number) {
    this.listInvoice = util.deleteData<BackEndData.invoice>(
      RealApi.INVOICE,
      this.loadingDataService,
      this.listInvoice!,
      $event
    );
  }

  ngOnInit(): void {
    this.listInvoice = this.loadingDataService.getData<
      Array<BackEndData.invoice>
    >(RealApi.INVOICE);
  }
}
