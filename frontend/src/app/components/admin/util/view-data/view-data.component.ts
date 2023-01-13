import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import util from '../../../../util/util';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamsAddView } from '../add-view/add-view.component';
import Constants from '../../../../../constants/constants';
import RealApi = Constants.RealApi;

type BaseInfo = { id: number; name?: string };

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css'],
})
export class ViewDataComponent {
  @Output() addDataEvent = new EventEmitter<void>();
  @Output() editDataEvent = new EventEmitter<BaseInfo>();
  @Output() deleteDataEvent = new EventEmitter<number>();
  @Input() listData?: Observable<Array<BaseInfo>>;
  @Input() nameData?: string;
  @Input() api?: RealApi;
  @Input() public getFormatName?: (info: any) => string;

  constructor(private route: Router) {}

  onAddDataEvent($event: MouseEvent) {
    // onCloseModal($event: MouseEvent) {
    this.addDataEvent.emit();
    // }
  }

  onDeleteData(id: number) {
    this.deleteDataEvent.emit(id);
  }

  ucFirst(nameData?: string) {
    return util.ucFirst(nameData ?? 'unknown');
  }

  onEdit(data: BaseInfo) {
    this.editDataEvent.emit(data);
  }

  routePrinterForm() {
    this.route
      .navigate(['./admin/printer_form'], {
        queryParams: {
          api: this.api,
        } as ParamsAddView,
      })
      .then(() => {});
  }
}
