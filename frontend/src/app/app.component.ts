import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LoadingDataService } from '../services/loading-data/loading-data.service';
import { RootStoreService } from './services/stores/root/root-store.service';
import Constants from '../constants/constants';
import BackEndData from '../models/backEnd/models';
import RealApi = Constants.RealApi;
// import {LoadingDataService} from '../services/loading-data/loading-data.service';
// import { RootStoreService } from '../services/stores/root/root-store.service';
// import {Subject, takeUntil, zip} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <!--    <div *mobxAutorun>-->
    <div>
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
  // providers: [LoadingDataService],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'frontend';
  private subjectCancel$ = new Subject();

  constructor(
    private loadingDataService: LoadingDataService,
    private rootStore: RootStoreService
  ) {}

  ngOnInit(): void {
    this.subjectCancel$.subscribe(console.log);

    console.log('products_in_stores'.toUpperCase());

    this.loadingDataService
      .getData<Array<BackEndData.product>>(RealApi.PRODUCTS)
      .pipe(takeUntil(this.subjectCancel$))
      .subscribe(it => {
        this.rootStore.productsStore.setProducts(it);
        this.rootStore.productsStore.setShowProducts(it);
      });

    // this.loadingDataService
    //   .getData<Array<BackEndData.app_user>>(RealApi.APP_USER)
    //   .pipe(takeUntil(this.subjectCancel$))
    //   .subscribe(this.rootStore.compositeMainUserService.setUsers);

    // zip(
    //   this.loadingDataService.getDataProducts(),
    //   this.loadingDataService.getDataCategories(),
    //   this.loadingDataService.getDataTags()
    // )
    //   .pipe(takeUntil(this.subjectCancel$))
    //   .subscribe(([products, categories, tags]) => {
    //     this.rootStore.productsStore.setProducts(products);
    //     this.rootStore.categoriesStore.setCategories(categories);
    //     this.rootStore.tagsStore.setTags(tags);
    //     this.rootStore.productsStore.setShowProducts(products);
    //   });
  }

  ngOnDestroy(): void {
    this.subjectCancel$.next('AppComponent, ngOnDestroy');
    this.subjectCancel$.unsubscribe();
  }
}
