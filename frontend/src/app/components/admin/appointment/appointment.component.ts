import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import BackEndData from '../../../../models/backEnd/models';
import { LoadingDataService } from '../../../../services/loading-data/loading-data.service';
import { Router } from '@angular/router';
import Constants from '../../../../constants/constants';
import RealApi = Constants.RealApi;
import { ParamsAddView } from '../util/add-view/add-view.component';
import Action = Constants.Action;
import util from '../../../util/util';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  nameData = 'appointment';
  listAppointment?: Observable<Array<BackEndData.appointment>>;
  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  private viewData: Record<
    keyof Omit<BackEndData.appointment, 'id'>,
    string | number
  > = {
    name: '',
    salary: 0,
  };

  toAddData() {
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(this.viewData),
      Api: RealApi.APPOINTMENT,
    } as ParamsAddView);
  }

  onEditData(data: { id: number }) {
    const info: Partial<{ id: number }> = { ...data };
    info.id = undefined;
    util.toModifyData(this.router, {
      nameData: this.nameData,
      viewData: JSON.stringify(info),
      Api: RealApi.APPOINTMENT,
      Action: Action.UPDATE,
      id: data.id,
    } as ParamsAddView);
  }

  onDelete($event: number) {
    console.log('onDelete: ', $event);

    this.listAppointment = util.deleteData<BackEndData.appointment>(
      RealApi.APPOINTMENT,
      this.loadingDataService,
      this.listAppointment!,
      $event
    );
  }

  ngOnInit(): void {
    this.listAppointment = this.loadingDataService.getData<
      Array<BackEndData.appointment>
    >(RealApi.APPOINTMENT);
  }
}
