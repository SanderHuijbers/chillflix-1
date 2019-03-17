import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilmSearchComponent} from './film-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppModule} from '../../app.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('FilmSearchComponent', () => {
	let component: FilmSearchComponent;
	let fixture: ComponentFixture<FilmSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [AppModule, NoopAnimationsModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FilmSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
