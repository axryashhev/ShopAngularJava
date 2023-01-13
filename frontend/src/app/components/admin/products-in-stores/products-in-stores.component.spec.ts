import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInStoresComponent } from './products-in-stores.component';

describe('ProductsInStoresComponent', () => {
  let component: ProductsInStoresComponent;
  let fixture: ComponentFixture<ProductsInStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsInStoresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsInStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
