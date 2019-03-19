import { async, ComponentFixture, TestBed, fakeAsync, inject, tick} from '@angular/core/testing';

import {FilmSearchComponent} from './film-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppModule} from '../../app.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FilmService } from '../../services/film.service';
import { FilmSearchFilmServiceMock } from './film-search.component.spec.helper';

describe('FilmSearchComponent', () => {
	let component: FilmSearchComponent;
	let fixture: ComponentFixture<FilmSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [
                {provide: FilmService, useClass: FilmSearchFilmServiceMock},
            ]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FilmSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
    });
    
    it('should have a search field', () => {
        // assignment 2
    });

    it('should resfresh film search when search form control gets a new value', fakeAsync(() => {
        component.searchControl.setValue('green');
        tick(500);

		expect(component.films).toBeTruthy();
    }));

    it('should resfresh film search when search form control gets a new value multiple times', fakeAsync(() => {
        component.searchControl.setValue('green');
        tick(500);
        expect(component.films).toBeTruthy();
        component.films = [];
        
        component.searchControl.setValue('blue');
        tick(500);
        expect(component.films.length > 0).toBeTruthy();
        component.films = [];

        component.searchControl.setValue('blue');
        tick(500);
        expect(component.films.length > 0).toBeTruthy();
    }));
    
});
