import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDataComponent } from './password-data.component';

describe('PasswordDataComponent', () => {
  let component: PasswordDataComponent;
  let fixture: ComponentFixture<PasswordDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
