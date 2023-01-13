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
import Role = Constants.Role;

@Component({
  selector: 'app-confirmation-note',
  templateUrl: './confirmation-note.component.html',
  styleUrls: ['./confirmation-note.component.css'],
})
export class ConfirmationNoteComponent implements OnInit {
  nameData = 'confirmation_note';
  listNote?: Observable<Array<BackEndData.confirmation_note>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  private viewData: Record<
    keyof Pick<BackEndData.confirmation_note, 'create_date'>,
    Date
  > = {
    create_date: new Date(),
  };

  private dataSelect: OutputDataSelect = [
    {
      name: 'app_user',
      keyValue: 0,
      api: RealApi.APP_USER,
      filterUser: Role.MANAGER,
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
        nameKey: 'status',
      } as StatusData),
      Api: RealApi.CONFIRMATION_NOTE,
    } as ParamsAddView);
  }

  onEditData(data: { id: number; photo?: string; status?: boolean }) {
    const info: Partial<{
      id: number;
      photo?: string;
      status?: boolean;
      id_user?: number;
    }> = { ...data };

    const modify = [{ api: RealApi.APP_USER, value: info.id_user }];

    this.dataSelect = util.changeDataSelect(this.dataSelect, modify);

    info.id = undefined;
    info.id_user = undefined;
    info.status = undefined;
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      dataSelect: JSON.stringify(this.dataSelect),
      Api: RealApi.ADDRESS,
      Action: Action.UPDATE,
      photo: info.photo,
      id: data.id,
      status: JSON.stringify({
        value: data.status,
        name: 'Статус потвержения',
        nameKey: 'status',
      } as StatusData),
    } as ParamsAddView);
  }

  toStringData(item: BackEndData.confirmation_note) {
    return item.status ? 'confirmed' : 'rejected';
  }
  onDelete($event: number) {
    this.listNote = util.deleteData<BackEndData.confirmation_note>(
      RealApi.CONFIRMATION_NOTE,
      this.loadingDataService,
      this.listNote!,
      $event
    );
  }

  ngOnInit(): void {
    this.listNote = this.loadingDataService.getData<
      Array<BackEndData.confirmation_note>
    >(RealApi.CONFIRMATION_NOTE);
  }
}
