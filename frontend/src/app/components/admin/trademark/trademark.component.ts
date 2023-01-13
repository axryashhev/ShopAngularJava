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
  selector: 'app-trademark',
  templateUrl: './trademark.component.html',
  styleUrls: ['./trademark.component.css'],
})
export class TrademarkComponent implements OnInit {
  nameData = 'trademark';
  listTrademark?: Observable<Array<BackEndData.trademark>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  private viewData: Record<
    keyof Pick<BackEndData.trademark, 'name' | 'phone'>,
    string
  > = {
    name: '',
    phone: '',
  };

  private dataSelect: OutputDataSelect = [
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
      Api: RealApi.TRADEMARK,
    } as ParamsAddView);
  }

  onEditData(data: { id: number; photo?: string }) {
    const info: Partial<Pick<BackEndData.trademark, 'id' | 'id_address'>> = {
      ...data,
    };

    const modify = [{ api: RealApi.ADDRESS, value: info.id_address }];

    this.dataSelect = util.changeDataSelect(this.dataSelect, modify);

    info.id = undefined;
    info.id_address = undefined;
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.TRADEMARK,
      Action: Action.UPDATE,
    } as ParamsAddView);
  }

  onDelete($event: number) {
    this.listTrademark = util.deleteData<BackEndData.trademark>(
      RealApi.TRADEMARK,
      this.loadingDataService,
      this.listTrademark!,
      $event
    );
  }

  ngOnInit(): void {
    this.listTrademark = this.loadingDataService.getData<
      Array<BackEndData.trademark>
    >(RealApi.TRADEMARK);
  }

  getApi() {
    return RealApi.TRADEMARK;
  }
}
