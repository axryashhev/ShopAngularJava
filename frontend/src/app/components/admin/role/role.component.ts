import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import BackEndData from '../../../../models/backEnd/models';
import { LoadingDataService } from '../../../../services/loading-data/loading-data.service';
import { SimpleDataEvent } from '../util/view-simple-data/view-simple-data.component';
import Constants from '../../../../constants/constants';
import RealApi = Constants.RealApi;

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent implements OnInit {
  nameData: string = 'role';
  data?: Observable<Array<BackEndData.units>>;

  constructor(private loadingDataService: LoadingDataService) {}
  onAddData($event: SimpleDataEvent) {
    this.loadingDataService.postData(RealApi.ROLE, $event);
  }

  onEditData($event: SimpleDataEvent) {
    this.loadingDataService.updateData(RealApi.ROLE, $event, $event.id);
  }

  ngOnInit(): void {
    this.data = this.loadingDataService.getData<Array<BackEndData.role>>(
      RealApi.ROLE
    );
  }
}
