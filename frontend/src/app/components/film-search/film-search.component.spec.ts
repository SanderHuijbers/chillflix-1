import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {FilmSearchComponent} from './film-search.component';
import {AppModule} from '../../app.module';
import {FilmsService} from '../../services/films.service';
import {FilmSearchFilmServiceMock} from './film-search.component.spec.helper';

describe('FilmSearchComponent', () => {
	let component: FilmSearchComponent;
	let fixture: ComponentFixture<FilmSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [
                {provide: FilmsService, useClass: FilmSearchFilmServiceMock},
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
        component.searchPageControl.setValue('green');
        tick(500);

		expect(component.films).toBeTruthy();
    }));

    it('should resfresh film search when search form control gets a new value multiple times', fakeAsync(() => {
        component.searchPageControl.setValue('green');
        tick(500);
        expect(component.films).toBeTruthy();
        component.films = [];
        
        component.searchPageControl.setValue('blue');
        tick(500);
        expect(component.films.length > 0).toBeTruthy();
        component.films = [];

        component.searchPageControl.setValue('blue');
        tick(500);
        expect(component.films.length > 0).toBeTruthy();
    }));
    
});
