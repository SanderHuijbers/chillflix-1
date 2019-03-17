import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilmListItemComponent} from './film-list-item.component';
import {AppModule} from '../../../app.module';

describe('FilmListItemComponent', () => {
	let component: FilmListItemComponent;
	let fixture: ComponentFixture<FilmListItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [AppModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FilmListItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
