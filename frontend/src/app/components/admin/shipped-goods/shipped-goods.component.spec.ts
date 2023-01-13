import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippedGoodsComponent } from './shipped-goods.component';

describe('ShippedGoodsComponent', () => {
  let component: ShippedGoodsComponent;
  let fixture: ComponentFixture<ShippedGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippedGoodsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShippedGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
