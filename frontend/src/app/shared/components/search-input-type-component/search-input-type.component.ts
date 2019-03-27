import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {debounceTime, filter, take, tap} from 'rxjs/operators';
import {AppState} from '../../../reducers';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {SearchAction} from '../../../components/film-search/search.actions';
import {Film} from '../../../models/film';
import {AddToBucket} from '../film-bucket/bucket.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search-input-type.component.html',
  styleUrls: ['./search-input-type.component.scss']
})
export class SearchInputTypeComponent implements OnInit {
  @Input() searchControl?: FormControl;

  constructor() { }

  ngOnInit(): void {

  }
}
