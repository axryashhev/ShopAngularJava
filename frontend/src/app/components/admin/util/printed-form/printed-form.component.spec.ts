import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintedFormComponent } from './printed-form.component';

describe('PrintedFormComponent', () => {
  let component: PrintedFormComponent;
  let fixture: ComponentFixture<PrintedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
