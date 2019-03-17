import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilmDetailsComponent} from './film-details.component';
import {AppRoutingModule} from '../../app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import {FilmService} from '../../services/film.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('FilmDetailsComponent', () => {
	let component: FilmDetailsComponent;
	let fixture: ComponentFixture<FilmDetailsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			providers: [
				{provide: FilmService, useValue: {}}
			],
			declarations: [FilmDetailsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FilmDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
