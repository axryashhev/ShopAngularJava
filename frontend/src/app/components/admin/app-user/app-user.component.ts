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
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.css'],
})
export class AppUserComponent {
  nameData = 'app_user';
  listUsers?: Observable<Array<BackEndData.app_user>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  private viewData: Record<
    keyof Omit<
      BackEndData.app_user,
      'id' | 'id_address' | 'id_role' | 'id_password_data' | 'id_appointment'
    >,
    string | Date
  > = {
    photo: '',
    surname: '',
    name: '',
    patronymic: '',
    login: '',
    password: '',
    email: '',
    number_phone: '',
    date_reg: new Date(),
  };

  private dataSelect: OutputDataSelect = [
    {
      name: 'address',
      keyValue: 0,
      api: RealApi.ADDRESS,
    },
    {
      name: 'role',
      keyValue: 0,
      api: RealApi.ROLE,
    },
    {
      name: 'password_data',
      keyValue: 0,
      api: RealApi.PASSWORD_DATA,
    },
    {
      name: 'appointment',
      keyValue: 0,
      api: RealApi.APPOINTMENT,
    },
  ];

  toAddData() {
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(this.viewData),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.APP_USER,
    } as ParamsAddView);
  }

  onEditData(data: { id: number; photo?: string }) {
    const info: Partial<
      Pick<
        BackEndData.app_user,
        | 'id_address'
        | 'id_role'
        | 'id_password_data'
        | 'id_appointment'
        | 'id'
        | 'photo'
      >
    > = { ...data };

    const modify = [
      { api: RealApi.ADDRESS, value: info.id_address },
      { api: RealApi.ROLE, value: info.id_role },
      { api: RealApi.PASSWORD_DATA, value: info.id_password_data },
      { api: RealApi.APPOINTMENT, value: info.id_appointment },
    ];

    this.dataSelect = util.changeDataSelect(this.dataSelect, modify);

    info.id = undefined;
    info.id_role = undefined;
    info.id_address = undefined;
    info.id_password_data = undefined;
    info.id_appointment = undefined;

    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.APP_USER,
      Action: Action.UPDATE,
      photo: info.photo,
      id: data.id,
    } as ParamsAddView);
  }

  onDelete($event: number) {
    console.log('onDelete: ', $event);

    this.listUsers = util.deleteData<BackEndData.app_user>(
      RealApi.APP_USER,
      this.loadingDataService,
      this.listUsers!,
      $event
    );
  }

  ngOnInit(): void {
    this.listUsers = this.loadingDataService.getData<
      Array<BackEndData.app_user>
    >(RealApi.APP_USER);
  }
}
