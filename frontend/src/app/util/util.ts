import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { autorun, computed } from 'mobx';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  OutputDataSelect,
  ParamsAddView,
} from '../components/admin/util/add-view/add-view.component';
import Constants from '../../constants/constants';
import BackEndData from '../../models/backEnd/models';
import { LoadingDataService } from '../../services/loading-data/loading-data.service';

namespace util {
  import RealApi = Constants.RealApi;

  export function deleteData<T>(
    api: Constants.RealApi,
    service: LoadingDataService,
    data: Observable<Array<T>>,
    params: number
  ): Observable<Array<T>> {
    return service.deleteData(api, params).pipe(
      catchError(err => {
        alert('Ошибка: ' + err);
        throw of(data);
      }),
      switchMap(() => {
        return service.getData<Array<T>>(api);
      })
    );
  }

  export function getNameData(tag: unknown, api: RealApi) {
    let item: any;
    switch (api) {
      case RealApi.PASSWORD_DATA:
        item = tag as BackEndData.password_data;
        return (
          item.num + item.series + ' ' + item.date_issue + ' ' + item.issued_by
        );
      case RealApi.ADDRESS:
        item = tag as BackEndData.address;
        return item.city + ', ' + item.house + ', ' + item.street;
      case RealApi.STOCK:
        item = tag as BackEndData.stock;
        return (
          item.id_address + ' ' + item.id_product + ' ' + item.id_user + ' '
        );
      case RealApi.CONFIRMATION_NOTE:
        item = tag as BackEndData.confirmation_note;
        return item.status ? 'confirmed' : 'rejected';
      case RealApi.INVOICE:
        item = tag as BackEndData.invoice;
        return item.price;
      case RealApi.SHIPMENT:
        item = tag as BackEndData.shipment;
        return item.data_shipment.toString();
      case RealApi.REQUEST:
        item = tag as BackEndData.request;
        return item.data_request.toString();
      case RealApi.PRODUCTS_IN_STORES:
      case RealApi.PRODUCTS_IN_REQUESTS:
      case RealApi.STORE_INVENTORY:
      case RealApi.SHIPPED_GOODS:
        item = tag as BackEndData.shipped_goods;
        return 'Invoice: ' + item.id_invoice;
      default:
        return 'not implementation';
    }
  }
  export function fromMobx<T>(expression: () => T): Observable<T> {
    return new Observable(observer => {
      const computedValue = computed(expression);
      const disposer = computedValue.observe_(changes => {
        observer.next(changes.newValue);
      }, true);

      return () => {
        disposer && disposer();
      };
    });
  }

  export function toModifyData(router: Router, params: ParamsAddView) {
    router
      .navigate(['./admin/add_view'], {
        queryParams: params,
      })
      .then(() => {});
  }

  export function checkType(value: unknown, key: string) {
    if (
      typeof value === 'string' &&
      Date.parse(value) &&
      key.includes('date')
    ) {
      return 'datetime-local';
    }

    switch (typeof value) {
      case 'number':
        return 'number';
      case 'string':
        return 'text';
      case 'boolean':
        return 'checkbox';
      default:
        return 'text';
    }
  }

  export function ucFirst(str: string) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  }

  export function installData<T extends {}>(obj: T, tag: string) {
    const storedJson = localStorage.getItem(tag);

    if (storedJson !== null) {
      Object.assign(obj, JSON.parse(storedJson));
    }

    autorun(() => {
      const data = JSON.stringify(obj);
      localStorage.setItem(tag, data);
    });
  }

  export function getInputObservable(search: ElementRef<HTMLInputElement>) {
    return fromEvent<Event>(search.nativeElement, 'input').pipe(
      map(event => (event.target as HTMLInputElement).value),
      debounceTime(500),
      map(value => (value.length > 3 ? value : '')),
      distinctUntilChanged()
    );
  }

  export function changeDataSelect(
    dataSelect: OutputDataSelect,
    modify: Array<{ api: Constants.RealApi; value: number | undefined }>
  ) {
    return dataSelect.map(it => {
      const findData = modify.find(item => item.api === it.api);
      let result = it;
      if (findData && typeof findData.value === 'number') {
        result.keyValue = findData.value;
      }

      return result;
    });
  }
}

export default util;
