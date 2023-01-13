import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { from, Observable } from 'rxjs';
import { LoadingDataService } from '../../../services/loading-data/loading-data.service';
import Constants from '../../../constants/constants';
import BackEndData from '../../../models/backEnd/models';
import RealApi = Constants.RealApi;
import { RootStoreService } from '../../services/stores/root/root-store.service';
import util from '../../util/util';
import fromMobx = util.fromMobx;

// import util from '../../../util/util';
// import fromMobx = util.fromMobx;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  @Input() showProducts?: Observable<Array<BackEndData.product>>;

  constructor(private rootStore: RootStoreService) {
    this.showProducts = fromMobx(() => rootStore.productsStore.showProducts);
  }

  addToCart(product: BackEndData.product) {
    this.rootStore.basketStore.addItem(product);
  }
}
