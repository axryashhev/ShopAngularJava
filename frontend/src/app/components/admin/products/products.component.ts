import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingDataService } from '../../../../services/loading-data/loading-data.service';
import Constants from '../../../../constants/constants';
import BackEndData from '../../../../models/backEnd/models';
import { Router } from '@angular/router';
import {
  OutputDataSelect,
  ParamsAddView,
} from '../util/add-view/add-view.component';
import RealApi = Constants.RealApi;
import Action = Constants.Action;
import util from '../../../util/util';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  @Input() products?: Observable<Array<BackEndData.product>>;

  constructor(
    private loadingDataService: LoadingDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.loadingDataService.getData<Array<BackEndData.product>>(
      RealApi.PRODUCTS
    );
  }

  // constructor(private rootStore: RootStoreService, private router: Router) {}

  // ngOnInit(): void {
  //   this.products = fromMobx(() => this.rootStore.productsStore.products);
  // }

  private dataSelect: OutputDataSelect = [
    {
      name: 'category',
      keyValue: 0,
      api: RealApi.CATEGORIES,
    },
    {
      name: 'trademark',
      keyValue: 0,
      api: RealApi.TRADEMARK,
    },
    {
      name: 'units',
      api: RealApi.UNITS,
      keyValue: 0,
    },
  ];

  addProduct() {
    this.router.navigate(['./admin/product_add']).then(() => {});
  }

  onEdit(product: BackEndData.product) {
    const viewData: Partial<BackEndData.product> = { ...product };

    const modify = [
      { api: RealApi.CATEGORIES, value: product.id_category },
      { api: RealApi.TRADEMARK, value: product.id_trademark },
      { api: RealApi.UNITS, value: product.id_units },
    ];

    this.dataSelect = util.changeDataSelect(this.dataSelect, modify);

    viewData.id = undefined;
    viewData.id_trademark = undefined;
    viewData.id_category = undefined;
    viewData.id_units = undefined;

    this.router
      .navigate(['./admin/add_view'], {
        queryParams: {
          viewData: JSON.stringify(viewData as Record<string, any>),
          dataSelect: JSON.stringify(this.dataSelect),
          nameData: 'product',
          Api: RealApi.PRODUCTS,
          Action: Action.UPDATE,
          id: product.id,
        } as ParamsAddView,
      })
      .then(() => {});
  }
}
