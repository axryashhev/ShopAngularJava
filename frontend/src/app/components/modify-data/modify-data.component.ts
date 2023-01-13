import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SimpleDataEvent } from '../admin/util/view-simple-data/view-simple-data.component';

@Component({
  selector: 'app-modify-data',
  templateUrl: './modify-data.component.html',
  styleUrls: ['./modify-data.component.css'],
})
export class ModifyDataComponent {
  constructor() {}

  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Output() editDataEvent = new EventEmitter<SimpleDataEvent>();
  @Input() choiceId?: number;
  @Input() choiceName?: string;
  @Input() nameData?: string;
  onCloseModal($event?: MouseEvent) {
    this.closeModalEvent.emit(false);
  }

  onEditData() {
    if (this.choiceId && this.choiceName) {
      this.editDataEvent.emit({
        id: this.choiceId,
        name: this.choiceName,
      });
    }
  }
}
