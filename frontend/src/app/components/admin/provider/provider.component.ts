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
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css'],
})
export class ProviderComponent implements OnInit {
  nameData = 'provider';
  listProvider?: Observable<Array<BackEndData.provider>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  private viewData: Record<
    keyof Omit<BackEndData.provider, 'id_address' | 'id'>,
    string
  > = {
    name: '',
    CPP: '000000000',
    INN: '0000000000',
    photo: '',
  };

  toAddData() {
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(this.viewData),
      Api: RealApi.ADDRESS,
    } as ParamsAddView);
  }

  onEditData(data: { id: number; photo?: string }) {
    const info: Partial<
      Pick<BackEndData.provider, 'id_address' | 'id' | 'photo'>
    > = { ...data };
    info.id = undefined;
    info.id_address = undefined;
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      Api: RealApi.ADDRESS,
      Action: Action.UPDATE,
      photo: info.photo,
      id: data.id,
    } as ParamsAddView);
  }

  onDelete($event: number) {
    this.listProvider = util.deleteData<BackEndData.provider>(
      RealApi.PROVIDER,
      this.loadingDataService,
      this.listProvider!,
      $event
    );
  }

  ngOnInit(): void {
    this.listProvider = this.loadingDataService.getData<
      Array<BackEndData.provider>
    >(RealApi.PROVIDER);
  }
}
