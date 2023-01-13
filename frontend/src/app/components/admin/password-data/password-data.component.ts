import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import BackEndData from '../../../../models/backEnd/models';
import { LoadingDataService } from '../../../../services/loading-data/loading-data.service';
import { Router } from '@angular/router';
import { ParamsAddView } from '../util/add-view/add-view.component';
import Constants from '../../../../constants/constants';
import RealApi = Constants.RealApi;
import Action = Constants.Action;
import util from '../../../util/util';

@Component({
  selector: 'app-password-data',
  templateUrl: './password-data.component.html',
  styleUrls: ['./password-data.component.css'],
})
export class PasswordDataComponent implements OnInit {
  nameData = 'password_data';
  listPasswordData?: Observable<Array<BackEndData.password_data>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  toStringData(item: BackEndData.password_data) {
    return (
      item.num + item.series + ' ' + item.date_issue + ' ' + item.issued_by
    );
  }

  private viewData: Record<keyof Omit<BackEndData.password_data, 'id'>, any> = {
    series: '0000',
    num: '000000',
    date_issue: new Date(),
    issued_by: '',
  };

  toAddData() {
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(this.viewData),
      Api: RealApi.PASSWORD_DATA,
    } as ParamsAddView);
  }

  onEditData(data: { id: number }) {
    const info: Partial<{ id: number }> = { ...data };
    info.id = undefined;

    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      Api: RealApi.PASSWORD_DATA,
      Action: Action.UPDATE,
      id: data.id,
    } as ParamsAddView);
  }

  onDelete($event: number) {
    this.listPasswordData = util.deleteData<BackEndData.password_data>(
      RealApi.PASSWORD_DATA,
      this.loadingDataService,
      this.listPasswordData!,
      $event
    );
  }

  ngOnInit(): void {
    this.listPasswordData = this.loadingDataService.getData<
      Array<BackEndData.password_data>
    >(RealApi.PASSWORD_DATA);
  }
}
