import { Injectable } from '@angular/core';
import { action, observable } from 'mobx-angular';
import { makeObservable } from 'mobx';
import { RootStoreService } from '../root/root-store.service';
import util from '../../../util/util';

import installData = util.installData;
import BackEndData from '../../../../models/backEnd/models';

@Injectable({
  providedIn: 'root',
})
export class ProductsStoreService {
  private static TAG = 'ProductsStoreService';
  @observable products: Array<BackEndData.product> = [];
  @observable showProducts: Array<BackEndData.product> = [];

  constructor(private rootStore?: RootStoreService) {
    makeObservable(this);
    installData(this, ProductsStoreService.TAG);
  }

  @action
  setProducts(products: Array<BackEndData.product>) {
    this.products = products;
  }

  @action
  setProduct(product: BackEndData.product) {
    this.products.push(product);
  }

  @action
  setShowProducts(products: Array<BackEndData.product>) {
    this.showProducts = products;
  }

  @action
  restoreShowProducts() {
    this.showProducts = this.products;
  }

  @action
  filterCategoryShowProducts(id: number) {
    this.showProducts = this.products.filter(
      product => product.id_category === id
    );
  }

  @action filterTrademarkShowProducts(id: number) {
    this.showProducts = this.products.filter(
      product => product.id_trademark === id
    );
  }

  @action
  findProductByName(name: string) {
    this.showProducts = this.products.filter(product =>
      product.name.toUpperCase().includes(name.toUpperCase())
    );
  }
}
