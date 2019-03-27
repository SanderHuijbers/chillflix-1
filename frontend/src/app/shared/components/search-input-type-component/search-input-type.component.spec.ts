import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputTypeComponent } from './search-input-type.component';

describe('SearchInputTypeComponent', () => {
  let component: SearchInputTypeComponent;
  let fixture: ComponentFixture<SearchInputTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInputTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
