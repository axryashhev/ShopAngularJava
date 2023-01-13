import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInRequestsComponent } from './products-in-requests.component';

describe('ProductsInRequestsComponent', () => {
  let component: ProductsInRequestsComponent;
  let fixture: ComponentFixture<ProductsInRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsInRequestsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsInRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
