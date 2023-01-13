import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import BackEndData from '../../../../../../models/backEnd/models';
import { LoadingDataService } from '../../../../../../services/loading-data/loading-data.service';
import Constants from '../../../../../../constants/constants';
import { Observable } from 'rxjs';
import RealApi = Constants.RealApi;
import util from '../../../../../util/util';
import { OutputDataSelect } from '../../../util/add-view/add-view.component';

type keys = 'id_category' | 'id_units' | 'id_trademark';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  @Input() viewProduct: Record<string, string | number | Date> = {
    name: '',
    count: 0,
    price: '',
    description: '',
    date_manufacture: new Date(),
    date_expiration: new Date(),
    // photo: '',
  };

  // viewSelect: Pick<BackEndData.product, keys> = {
  //   id_category: 0,
  //   id_trademark: 0,
  //   id_units: 0,
  // };

  constructor(private loadingDataService: LoadingDataService) {}

  @Input() dataSelect: OutputDataSelect = [
    {
      name: 'category',
      value: this.loadingDataService.getData<Array<BackEndData.category>>(
        RealApi.CATEGORIES
      ),
      keyValue: 0,
    },
    {
      name: 'trademark',
      value: this.loadingDataService.getData<Array<BackEndData.trademark>>(
        RealApi.TRADEMARK
      ),
      keyValue: 0,
    },
    {
      name: 'units',
      value: this.loadingDataService.getData<Array<BackEndData.units>>(
        RealApi.UNITS
      ),
      keyValue: 0,
    },
  ];

  // onFileSelected(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   if (target.files && target.files.length > 0) {
  //     console.log(target.files[0]);
  //   }
  // }

  // @Input() categories: Observable<Array<Category>> | undefined;
  // @Input() tags: Observable<Array<Tag>> | undefined;

  // constructor(private rootStore: RootStoreService) {}

  // onPublish() {
  //   this.rootStore.productsStore.setProduct(this.product);
  // }
  trackByFn(item: unknown) {
    return item;
  }

  onPublish() {
    // this.dataSelect.map(it => {
    //   console.log('it: ', it);
    // });
    // console.log('edit: ', this.viewProduct);
  }

  checkType(value: string | number | Date, key: string) {
    return util.checkType(value, key);
  }
}
