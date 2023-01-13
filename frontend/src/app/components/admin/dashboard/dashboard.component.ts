import { Component, OnDestroy, OnInit } from '@angular/core';
import util from '../../../util/util';
import Constants from '../../../../constants/constants';
import { Subscription } from 'rxjs';
import fromMobx = util.fromMobx;
import { RootStoreService } from '../../../services/stores/root/root-store.service';
import Role = Constants.Role;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  dataDashboard = Constants.dataDashboard;
  subscription?: Subscription;

  constructor(private rootService: RootStoreService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ucFirst(data: string) {
    return util.ucFirst(data);
  }

  ngOnInit(): void {
    this.subscription = fromMobx(
      () => this.rootService.compositeMainUserService.activeUser?.id_role
    ).subscribe(it => {
      if (it === Role.MANAGER) {
        this.dataDashboard.push('confirmation_note');
        this.dataDashboard.push('role');
        this.dataDashboard.push('app_user');
      }
    });
  }
}
