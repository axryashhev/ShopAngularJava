import { Injectable } from '@angular/core';
import { action, observable, computed } from 'mobx-angular';
import BackEndData from '../../../../models/backEnd/models';
import { RootStoreService } from '../root/root-store.service';
import { makeObservable } from 'mobx';
import util from '../../../util/util';
import installData = util.installData;

@Injectable({
  providedIn: 'root',
})
export class BasketStoreService {
  private static TAG = 'BasketStoreService';
  @observable products: Array<BackEndData.product> = [];
  constructor(private rootStore?: RootStoreService) {
    makeObservable(this);
    installData(this, BasketStoreService.TAG);
  }
  @action
  clean() {
    this.products = [];
  }

  @action
  addItem(product: BackEndData.product) {
    // console.log('addData: ', product);
    this.products.push(product);
  }

  @action.bound
  getSumAllProduct() {
    let result = 0;
    for (let i = 0; i < this.products.length; i++) {
      // console.log('tes: ', this.products[i].price);
      result += parseFloat(this.products[i].price.replace('$', ''));
    }
    return result;
  }
}
