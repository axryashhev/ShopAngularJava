import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoadingDataService } from '../../../../../../services/loading-data/loading-data.service';
import Constants from '../../../../../../constants/constants';
import RealApi = Constants.RealApi;
import { OutputViewData } from '../../../util/add-view/add-view.component';
import { Subscription } from 'rxjs';
import { SimpleDataEvent } from '../../../util/view-simple-data/view-simple-data.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  @Input() visible: boolean = false;
  @Input() nameCategory: string = '';
  @Output() addNewEvent = new EventEmitter<string>();

  addCategory() {
    this.addNewEvent.emit(this.nameCategory);
  }
}
