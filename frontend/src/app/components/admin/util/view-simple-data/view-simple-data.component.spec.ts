import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSimpleDataComponent } from './view-simple-data.component';

describe('ViewSimpleDataComponent', () => {
  let component: ViewSimpleDataComponent;
  let fixture: ComponentFixture<ViewSimpleDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSimpleDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSimpleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
