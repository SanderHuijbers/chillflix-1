import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {MauriceApplicationState} from '../models/maurice-application-state';

@Injectable({
  providedIn: 'root'
})
export class MauriceApplicationStateService {
  private stateSubject = new BehaviorSubject<MauriceApplicationState>(new MauriceApplicationState());
  public state$ = this.stateSubject as Observable<MauriceApplicationState>;

  constructor() { }

  public addSearchQuery(searchQuery: string) {
    const currentState = {...this.stateSubject.getValue()};
    currentState.searchQuery = searchQuery;
    this.stateSubject.next(currentState);
  }
}
