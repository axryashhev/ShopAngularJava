import { Injectable } from '@angular/core';
import { ProductsStoreService } from '../products/products-store.service';
import { BasketStoreService } from '../basket/basket-store.service';
import { CompositeMainUserService } from '../composite_main_user/composite-main-user.service';

@Injectable({
  providedIn: 'root',
})
export class RootStoreService {
  productsStore: ProductsStoreService;
  basketStore: BasketStoreService;
  compositeMainUserService: CompositeMainUserService;

  constructor() {
    this.productsStore = new ProductsStoreService(this);
    this.basketStore = new BasketStoreService(this);
    this.compositeMainUserService = new CompositeMainUserService(this);
  }
}
