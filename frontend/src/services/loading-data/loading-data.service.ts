import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Constants from '../../constants/constants';
import { Observable, Subscription } from 'rxjs';
import RealApi = Constants.RealApi;
import { OutputViewData } from '../../app/components/admin/util/add-view/add-view.component';
import { SimpleDataEvent } from '../../app/components/admin/util/view-simple-data/view-simple-data.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingDataService {
  constructor(private http: HttpClient) {}

  getData<T>(api: RealApi): Observable<T> {
    return this.http.get<T>(api);
  }

  postData(api: RealApi, params: OutputViewData): Observable<unknown> {
    console.log('post: ', api);
    console.log('params: ', params);
    return this.http.post(api, params);
  }

  updateData(
    api: RealApi,
    params: OutputViewData | SimpleDataEvent,
    id: number
  ): Observable<unknown> {
    console.log('update:');
    console.log('api: ', api);
    console.log('params: ', params);
    return this.http.put(api + '/' + id, params);
  }

  deleteData(api: RealApi, id: number) {
    const finalApi = api + '/' + id;
    // alert('delete: ' + finalApi);
    return this.http.delete(finalApi);
  }
}
