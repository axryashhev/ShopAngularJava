import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSimpleViewComponent } from './add-simple-view.component';

describe('AddSimpleViewComponent', () => {
  let component: AddSimpleViewComponent;
  let fixture: ComponentFixture<AddSimpleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSimpleViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddSimpleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
