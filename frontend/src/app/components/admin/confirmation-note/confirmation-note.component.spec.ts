import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationNoteComponent } from './confirmation-note.component';

describe('ConfirmationNoteComponent', () => {
  let component: ConfirmationNoteComponent;
  let fixture: ComponentFixture<ConfirmationNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
