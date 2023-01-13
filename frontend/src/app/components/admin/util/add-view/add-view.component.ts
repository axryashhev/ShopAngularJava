import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  concatMap,
  filter,
  Observable,
  Subject,
  takeUntil,
  toArray,
} from 'rxjs';
import util from '../../../../util/util';
import { ActivatedRoute } from '@angular/router';
import Constants from '../../../../../constants/constants';
import { LoadingDataService } from '../../../../../services/loading-data/loading-data.service';
import { RootStoreService } from '../../../../services/stores/root/root-store.service';
import BackEndData from '../../../../../models/backEnd/models';
import Action = Constants.Action;
import Role = Constants.Role;
import RealApi = Constants.RealApi;

type DataSelect = {
  name: string;
  value?: Observable<Array<{ id: number; name?: string }>>;
  keyValue: number;
  api?: RealApi;
  filterUser?: Role;
};

export type OutputDataSelect = Array<DataSelect>;

export type InputDataSelect = OutputDataSelect | string;

export type OutputViewData = Record<string, any>;

export type InputViewData = string | OutputViewData;

export type StatusData = {
  value: boolean;
  name: string;
  nameKey: string;
};
export interface ParamsAddView {
  viewData?: InputViewData;
  dataSelect?: InputDataSelect;
  status?: StatusData | string;
  nameData?: string;
  Action?: Action;
  Api?: RealApi;
  id?: number;
}

@Component({
  selector: 'app-add-view',
  templateUrl: './add-view.component.html',
  styleUrls: ['./add-view.component.css'],
})
export class AddViewComponent implements OnInit, OnDestroy {
  visible = true;
  viewData?: OutputViewData;
  dataSelect?: OutputDataSelect;
  nameData?: string;
  api?: RealApi;
  statusData?: StatusData;
  action: Action = Action.ADD;
  private subjectCancel$ = new Subject<string>();
  private id?: number;

  getActionName() {
    return this.action === Action.ADD ? 'Publish' : 'Update';
  }

  getLabelName() {
    const predicate = this.action === Action.ADD ? 'Add New ' : 'Update ';
    return predicate + this.nameData;
  }

  trackByFn(item: unknown) {
    return item;
  }

  constructor(
    private route: ActivatedRoute,
    private loadingDataService: LoadingDataService,
    private location: Location,
    private rootStore: RootStoreService
  ) {
    route.queryParams
      .pipe(takeUntil(this.subjectCancel$))
      .subscribe((it: ParamsAddView) => {
        let viewData = it.viewData;
        if (typeof viewData === 'string') {
          viewData = JSON.parse(viewData) as Record<string, any>;
        }

        let dataSelect = it.dataSelect;

        if (typeof dataSelect === 'string') {
          dataSelect = JSON.parse(dataSelect) as OutputDataSelect;
        }

        let statusData = it.status;

        if (typeof statusData === 'string') {
          statusData = JSON.parse(statusData) as StatusData;
        }

        if (dataSelect?.some(it => it.value === undefined)) {
          dataSelect?.map(it => {
            let item = it;
            if (item.api) {
              let val = this.loadingDataService.getData<Array<any>>(item.api);
              if (it.filterUser && item.api === RealApi.APP_USER) {
                val = val.pipe(
                  concatMap(i => i),
                  filter(item => {
                    return item.id_role === it.filterUser;
                  }),
                  toArray()
                );
              }
              item.value = val;
            }
            return item;
          });
        }

        this.statusData = statusData;
        this.viewData = viewData;
        this.dataSelect = dataSelect;
        this.nameData = it.nameData;
        this.api = it.Api;
        if (it.Action) {
          this.action = it.Action;
        }
        this.id = it.id;
      });
  }

  checkType(value: string | number | Date, key: string) {
    return util.checkType(value, key);
  }

  onPublish() {
    console.log('this.api: ', this.api);
    console.log('this.viewData: ', this.viewData);
    if (!this.api || !this.viewData) {
      return;
    }

    if (this.dataSelect) {
      this.dataSelect.map(it => {
        this.viewData!['id_' + it.name] = it.keyValue;
      });
    }

    if (this.statusData) {
      this.viewData![this.statusData.nameKey] = this.statusData.value;
    }

    console.log('work');
    if (this.action === Action.ADD) {
      this.loadingDataService
        .postData(this.api, this.viewData)
        .pipe(takeUntil(this.subjectCancel$))
        .subscribe(console.log);
    } else {
      this.loadingDataService
        .updateData(this.api, this.viewData, this.id!)
        .pipe(takeUntil(this.subjectCancel$))
        .subscribe(console.log);
    }
    if (this.nameData && this.nameData === 'product') {
      this.loadingDataService
        .getData<Array<BackEndData.product>>(RealApi.PRODUCTS)
        .pipe(takeUntil(this.subjectCancel$))
        .subscribe(it => {
          this.rootStore.productsStore.setProducts(it);
        });
    }
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subjectCancel$.next('AddViewComponent: ngOnDestroy');
    this.subjectCancel$.unsubscribe();
  }

  ngOnInit(): void {
    this.subjectCancel$.subscribe(console.log);

    if (this.viewData && this.viewData['id']) {
    }
  }

  getNameData(tag: unknown, api?: Constants.RealApi) {
    if (!api) {
      return 'unknown';
    }
    return util.getNameData(tag, api);
  }

  checkDate(value: string, key: string) {
    return key.includes('date') && !!Date.parse(value);
  }

  onCheckboxChange($event: Event) {
    if (this.statusData) {
      this.statusData.value = !this.statusData.value;
      console.log('statusData: ', this.statusData.value);
    }
  }
}
