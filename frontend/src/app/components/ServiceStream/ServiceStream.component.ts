import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { Person } from '../../../models/person';

// styleUrls: ['./app.component.css']
// templateUrl: './app.component.html',

// concatMap(x => of(x).pipe(delay(1000))),

@Component({
  selector: 'ServiceStream',
  template: `
    <div>
      <p>Привет:</p>
      <p>{{ message }}</p>
      <ul>
        <li *ngFor="let user of persons">
          <p>Имя пользователя: {{ user?.firstName }}</p>
          <p>Возраст пользователя: {{ user?.lastName }}</p>
        </li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class ServiceStreamComponent implements OnInit, OnDestroy {
  message: string | undefined;
  persons: Array<Person> | undefined;
  private serverCancel$ = new Subject<string>();
  private api = '/api/dad_jokes';
  private json = '/api/list_user';

  constructor(private http$: HttpClient) {}

  ngOnInit(): void {
    this.serverCancel$.subscribe(console.log);

    this.http$
      .get(this.api, { responseType: 'text' })
      .pipe(takeUntil(this.serverCancel$))
      .subscribe(message => (this.message = message));

    this.http$
      .get<Array<Person>>(this.json)
      .pipe(takeUntil(this.serverCancel$))
      .subscribe(listPerson => (this.persons = listPerson));
  }

  ngOnDestroy(): void {
    this.serverCancel$.next('ngOnDestroy');
    this.serverCancel$.unsubscribe();
  }
}
