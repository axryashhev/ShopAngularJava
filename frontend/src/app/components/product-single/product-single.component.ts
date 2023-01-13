import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  concatMap,
  filter,
  find,
  forkJoin,
  mergeMap,
  Observable,
  of,
  Subject,
  switchMap,
  take,
  takeUntil,
  toArray,
} from 'rxjs';
import { LoadingDataService } from '../../../services/loading-data/loading-data.service';
import BackEndData from '../../../models/backEnd/models';
import Constants from '../../../constants/constants';
import RealApi = Constants.RealApi;
import { RootStoreService } from '../../services/stores/root/root-store.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css'],
})
export class ProductSingleComponent implements OnInit, OnDestroy {
  id: string = '';

  units?: BackEndData.units;
  product?: BackEndData.product;
  category?: BackEndData.category;
  trademark?: BackEndData.trademark;
  relatedProducts?: Observable<Array<BackEndData.product>>;

  private subjectCancel$ = new Subject<string>();

  constructor(
    private ref: ChangeDetectorRef,
    private rootStoreService: RootStoreService,
    private loadingDataService: LoadingDataService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subjectCancel$.subscribe(console.log);
    const products = this.loadingDataService.getData<
      Array<BackEndData.product>
    >(RealApi.PRODUCTS);

    this.activateRoute.params
      .pipe(
        switchMap(params => of(params['id'])),
        switchMap(id => {
          this.id = id;
          return products.pipe(
            concatMap(it => it),
            filter(it => {
              return it.id === parseInt(id);
            }),
            switchMap((it: BackEndData.product) => {
              console.log('product: ', it);
              return forkJoin({
                product: of(it),
                units: this.findUnitsById(it.id_units),
                category: this.findCategoryById(it.id_category),
                trademark: this.findTrademarkById(it.id_trademark),
              });
            })
          );
        }),
        takeUntil(this.subjectCancel$)
      )
      .subscribe(data => {
        this.product = data.product;
        this.category = data.category;
        this.units = data.units;
        this.trademark = data.trademark;
      });

    this.relatedProducts = products.pipe(
      concatMap(it => it),
      take(3),
      toArray()
    );
  }

  private findUnitsById = (
    id_units: number
  ): Observable<BackEndData.units | undefined> =>
    this.loadingDataService
      .getData<Array<BackEndData.units>>(RealApi.UNITS)
      .pipe(
        mergeMap(it => it),
        find(it => it.id === id_units)
      );

  private findCategoryById = (
    id_category: number
  ): Observable<BackEndData.category | undefined> =>
    this.loadingDataService
      .getData<Array<BackEndData.category>>(RealApi.CATEGORIES)
      .pipe(
        mergeMap(it => it),
        find(it => {
          console.log('it1: ', it);
          return it.id === id_category;
        })
      );

  private findTrademarkById = (
    id_trademark: number
  ): Observable<BackEndData.trademark | undefined> =>
    this.loadingDataService
      .getData<Array<BackEndData.trademark>>(RealApi.TRADEMARK)
      .pipe(
        mergeMap(it => it),
        find(it => {
          console.log('it2: ', it);
          return it.id === id_trademark;
        })
      );

  addToCard(product?: BackEndData.product) {
    if (product) {
      this.rootStoreService.basketStore.addItem(product);
    }
  }

  ngOnDestroy(): void {
    this.subjectCancel$.next('AppComponent, ngOnDestroy');
    this.subjectCancel$.unsubscribe();
  }

  show(id: number) {
    this.router
      .navigateByUrl(this.router.url.replace(this.id, String(id)))
      .then(() => {});
  }
}
