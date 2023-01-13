import { Component, EventEmitter, Input, Output } from '@angular/core';
import util from '../../../../util/util';
import { Observable } from 'rxjs';

export interface SimpleDataEvent {
  id: number;
  name: string;
}

@Component({
  selector: 'app-view-simple-data',
  templateUrl: './view-simple-data.component.html',
  styleUrls: ['./view-simple-data.component.css'],
})
export class ViewSimpleDataComponent {
  @Input() nameData: string = '';
  show_dialog = false;
  choiceId = -1;
  choiceName: string = '';
  newValue = '';
  @Input() data?: Observable<Array<any>>;
  @Output() addDataEvent = new EventEmitter<SimpleDataEvent>();
  @Output() editDataEvent = new EventEmitter<SimpleDataEvent>();
  @Output() deleteDataEvent = new EventEmitter<number>();
  constructor() {}

  ucFirst(nameData: string) {
    return util.ucFirst(nameData);
  }

  toggle() {
    this.show_dialog = !this.show_dialog;
  }

  selectData(id: number, name: string) {
    this.choiceId = id;
    this.choiceName = name;
  }

  onClose($event?: boolean) {
    this.choiceId = -1;
  }

  onAddNewEvent($event: SimpleDataEvent) {
    this.addDataEvent.emit({
      id: $event.id,
      name: $event.name,
    });
  }

  onEditData($event: SimpleDataEvent) {
    this.editDataEvent.emit({
      id: $event.id,
      name: $event.name,
    });
  }

  deleteData($event: number) {
    this.deleteDataEvent.emit($event);
  }
}
