import { Injectable } from '@angular/core';
import { action, observable } from 'mobx-angular';
import BackEndData from '../../../../models/backEnd/models';
import { makeObservable } from 'mobx';
import util from '../../../util/util';
import installData = util.installData;
import { RootStoreService } from '../root/root-store.service';

interface Composite<T> {
  getChild: (i: number) => T;
  addChild: (child: T) => void;
  removeChild: (child: T) => void;
}

@Injectable({
  providedIn: 'root',
})
export class CompositeMainUserService
  implements Composite<BackEndData.app_user>
{
  private static TAG = 'CompositeMainUserService';
  @observable childMainUsers: Array<BackEndData.app_user> = [];
  @observable activeUser?: BackEndData.app_user;

  constructor(private rootStore?: RootStoreService) {
    makeObservable(this);

    installData(this, CompositeMainUserService.TAG);
  }
  @action.bound
  changeActiveUser(user: BackEndData.app_user) {
    // alert(JSON.stringify(user));
    this.activeUser = user;
  }
  @action.bound
  addChild(child: BackEndData.app_user) {
    if (!child.id) {
      return false;
    }

    if (this.childMainUsers.length === 0) {
      this.childMainUsers.push(child);
      return true;
    }
    const index: number | undefined = this.findById(child.id);
    if (index !== undefined) {
      this.childMainUsers[index] = child;
    } else {
      this.childMainUsers.push(child);
    }

    return true;
  }
  @action.bound
  getChild(i: number): BackEndData.app_user {
    return this.childMainUsers[i];
  }
  @action.bound
  removeChild(child: BackEndData.app_user): void {
    if (!child.id) {
      return;
    }
    let newChildren: Array<BackEndData.app_user> = [];
    this.childMainUsers.forEach(component => {
      if (component.id !== child.id) {
        newChildren.push(component);
      }
    });
    this.childMainUsers = newChildren;
  }
  @action.bound
  public findById(id: number): undefined | number {
    for (let i = 0; i < this.childMainUsers.length; i++) {
      const item = this.childMainUsers[i];
      if (item.id && item.id === id) {
        return i;
      }
    }
    return undefined;
  }
  @action.bound
  public clearAll() {
    this.childMainUsers = [];
    this.activeUser = undefined;
  }
  @action.bound
  public clearActiveUser() {
    this.activeUser = undefined;
  }
  @action.bound
  public setUsers(users: Array<BackEndData.app_user>) {
    this.childMainUsers = users;
  }
}
