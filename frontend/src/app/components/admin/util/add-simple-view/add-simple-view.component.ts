import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SimpleDataEvent } from '../view-simple-data/view-simple-data.component';

@Component({
  selector: 'app-add-simple-view',
  templateUrl: './add-simple-view.component.html',
  styleUrls: ['./add-simple-view.component.css'],
})
export class AddSimpleViewComponent {
  @Input() visible: boolean = false;
  @Input() value: string = '';
  @Input() id?: number;
  @Output() addNewEvent = new EventEmitter<SimpleDataEvent>();
  @Input() nameData?: string = '';
  constructor() {}

  onAddNew($event: MouseEvent) {
    if (this.id) {
      this.addNewEvent.emit({
        id: this.id,
        name: this.value,
      });
    }
  }
}
