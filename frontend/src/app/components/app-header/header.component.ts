import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { concatMap, find, Observable, Subject, takeUntil } from 'rxjs';
import BackEndData from '../../../models/backEnd/models';
import { RootStoreService } from '../../services/stores/root/root-store.service';
import util from '../../util/util';
import fromMobx = util.fromMobx;
import Util from '../../util/util';
import Constants from '../../../constants/constants';
import Role = Constants.Role;
import { Location } from '@angular/common';
import RealApi = Constants.RealApi;
import { LoadingDataService } from '../../../services/loading-data/loading-data.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class AppHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  basketProduct?: Observable<Array<BackEndData.product>>;
  @Input() currentUser?: Observable<BackEndData.app_user | undefined>;
  private serverCancel$ = new Subject<string>();

  @ViewChild('search')
  search?: ElementRef<HTMLInputElement>;
  count?: Observable<number>;
  sum: number = 0;
  private keyWord?: string;
  credentials = { username: '', password: '' };

  constructor(
    private rootService: RootStoreService,
    private location: Location,
    private loadingDataService: LoadingDataService
  ) {}

  ngOnDestroy(): void {
    this.serverCancel$.next('AppHeaderComponent, ngOnDestroy');
    this.serverCancel$.unsubscribe();
  }

  ngOnInit(): void {
    this.serverCancel$.subscribe(console.log);
    this.basketProduct = fromMobx(() => this.rootService.basketStore.products);
    this.count = fromMobx(() => this.rootService.basketStore.products.length);
    this.currentUser = fromMobx(
      () => this.rootService.compositeMainUserService.activeUser
    );
  }

  checkSum() {
    this.sum = this.rootService.basketStore.getSumAllProduct();
  }

  goGlobalSearch() {
    if (this.keyWord) {
      window.location.href =
        'https://www.google.com/search?q=' +
        this.keyWord +
        ' ' +
        'site:www.metro-cc.ru';
    }
  }

  ngAfterViewInit(): void {
    if (!this.search) {
      return;
    }

    Util.getInputObservable(this.search)
      .pipe(takeUntil(this.serverCancel$))
      .subscribe(value => {
        if (value !== '') {
          this.keyWord = value;
        } else {
          this.keyWord = undefined;
        }
      });
  }

  onDelete() {
    this.rootService.basketStore.clean();
  }

  changeUser(user: BackEndData.app_user) {
    console.log('changeUser: ');
    this.rootService.compositeMainUserService.changeActiveUser(user);
  }

  getRoleName(id_role: Role) {
    switch (id_role) {
      case Constants.Role.MANAGER:
        return 'Manager';
      case Constants.Role.WORKER:
        return 'Worker';
    }
  }

  onDeleteActiveUser() {
    this.rootService.compositeMainUserService.clearActiveUser();
  }

  loginG() {
    this.loadingDataService
      .getData<Array<BackEndData.app_user>>(RealApi.APP_USER)
      .pipe(
        concatMap(it => it),
        find(
          it =>
            it.login === this.credentials.username &&
            this.credentials.password === it.password
        ),
        takeUntil(this.serverCancel$)
      )
      .subscribe((it: BackEndData.app_user | undefined) => {
        if (it) {
          this.rootService.compositeMainUserService.changeActiveUser(it);
          this.currentUser = fromMobx(
            () => this.rootService.compositeMainUserService.activeUser
          );
        } else {
          alert('Ошибка при входе в систему');
        }
      });
  }

  logout() {
    this.rootService.compositeMainUserService.clearActiveUser();
    this.currentUser = fromMobx(
      () => this.rootService.compositeMainUserService.activeUser
    );
  }
}
