import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  mergeMap,
  Observable,
  skip,
  Subject,
  take,
  takeUntil,
  toArray,
} from 'rxjs';
import BackEndData from '../../../models/backEnd/models';
import { LoadingDataService } from '../../../services/loading-data/loading-data.service';
import Constants from '../../../constants/constants';
import { RootStoreService } from '../../services/stores/root/root-store.service';
import RealApi = Constants.RealApi;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('search') search?: ElementRef<HTMLInputElement>;
  private subjectCancel$ = new Subject<string>();

  categories?: Observable<Array<BackEndData.category>>;
  trademarks?: Observable<Array<BackEndData.trademark>>;
  popularProduct?: Observable<Array<BackEndData.product>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private rootStore: RootStoreService
  ) {}

  // constructor(private rootStore: RootStoreService) {}

  ngAfterViewInit(): void {
    if (this.search) {
      fromEvent<Event>(this.search.nativeElement, 'input')
        .pipe(
          map(event => (event.target as HTMLInputElement).value),
          debounceTime(500),
          map(value => (value.length > 3 ? value : '')),
          distinctUntilChanged(),
          takeUntil(this.subjectCancel$)
        )
        .subscribe(value => {
          // console.log('value: ', value);
          if (value === '') {
            this.rootStore.productsStore.restoreShowProducts();
          } else {
            this.rootStore.productsStore.findProductByName(value);
          }
        });
    }
  }

  // getProducts() {
  //   return this.rootStore.productsStore.products;
  // }

  ngOnInit(): void {
    this.subjectCancel$.subscribe(console.log);
    this.categories = this.loadingDataService.getData<
      Array<BackEndData.category>
    >(RealApi.CATEGORIES);

    this.trademarks = this.loadingDataService.getData<
      Array<BackEndData.trademark>
    >(RealApi.TRADEMARK);

    this.popularProduct = this.loadingDataService
      .getData<Array<BackEndData.product>>(RealApi.PRODUCTS)
      .pipe(
        concatMap(it => it),
        skip(2),
        take(3),
        toArray()
      );

    // this.categories = fromMobx(() => this.rootStore.categoriesStore.categories);
    // this.tags = fromMobx(() => this.rootStore.tagsStore.tags);
  }

  filterCategory(id: number) {
    this.rootStore.productsStore.filterCategoryShowProducts(id);
  }

  filterTrademark(id_trademark: number) {
    this.rootStore.productsStore.filterTrademarkShowProducts(id_trademark);
  }

  ngOnDestroy(): void {
    this.subjectCancel$.next('SidebarComponent: ngOnDestroy');
    this.subjectCancel$.unsubscribe();
  }

  navigateToProduct(id_product: number) {}
}
