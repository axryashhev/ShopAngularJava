import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import BackEndData from '../../../../models/backEnd/models';
import { LoadingDataService } from '../../../../services/loading-data/loading-data.service';
import Constants from '../../../../constants/constants';
import { SimpleDataEvent } from '../util/view-simple-data/view-simple-data.component';
import RealApi = Constants.RealApi;
import util from '../../../util/util';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  show_dialog: boolean = false;

  choiceId = -1;
  choiceName = '';
  @Input() categories?: Observable<Array<BackEndData.category>>;
  private subjectCancel$ = new Subject<string>();

  constructor(private loadingDataService: LoadingDataService) {}

  ngOnInit(): void {
    this.categories = this.loadingDataService.getData<
      Array<BackEndData.category>
    >(RealApi.CATEGORIES);

    this.subjectCancel$.subscribe(console.log);
  }
  nameData: string = 'category';

  toggle() {
    this.show_dialog = !this.show_dialog;
  }

  selectData(id: number, name: string) {
    this.choiceId = id;
    this.choiceName = name;
  }

  onClose($event: boolean) {
    this.choiceId = -1;
  }

  editData($event: SimpleDataEvent) {
    this.categories = this.loadingDataService
      .updateData(RealApi.CATEGORIES, $event, $event.id)
      .pipe(
        switchMap(() => {
          return this.loadingDataService.getData<Array<BackEndData.category>>(
            RealApi.CATEGORIES
          );
        })
      );
  }

  deleteData(id: number) {
    this.categories = util.deleteData(
      RealApi.CATEGORIES,
      this.loadingDataService,
      this.categories!,
      id
    );
  }

  onAddData($event: string) {
    this.categories = this.loadingDataService
      .postData(RealApi.CATEGORIES, {
        name: $event,
      })
      .pipe(
        switchMap(() => {
          return this.loadingDataService.getData<Array<BackEndData.category>>(
            RealApi.CATEGORIES
          );
        })
      );
  }

  ngOnDestroy(): void {
    this.subjectCancel$.next('CategoryComponent, onOnDestroy');
    this.subjectCancel$.unsubscribe();
  }
}
