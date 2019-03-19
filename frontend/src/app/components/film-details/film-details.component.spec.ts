import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilmDetailsComponent} from './film-details.component';
import {AppRoutingModule} from '../../app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import {FilmService} from '../../services/film.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {FilmDetailsFilmServiceMock} from './film-details.component.spec.helper';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from '../../app.module';

describe('FilmDetailsComponent', () => {
	let component: FilmDetailsComponent;
	let fixture: ComponentFixture<FilmDetailsComponent>;

    // beforeEach gets triggered before each "it"
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [AppModule],
			providers: [
				{provide: FilmService, useClass: FilmDetailsFilmServiceMock},
				{provide: ActivatedRoute,
					useValue: {
						params: of({id: 123})
					}
				}
			],
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

	it('should show movie title', () => {
		const title = fixture.debugElement.nativeElement.querySelector('.card-title').innerText;
		expect(title).toEqual(FilmDetailsFilmServiceMock.filmMock.title);
    });
    
    it('should show movie year', () => {
		const yearExists = fixture.debugElement.nativeElement.querySelector('.card-text').innerText.includes(FilmDetailsFilmServiceMock.filmMock.year);
		expect(yearExists).toBeTruthy;
    });
    
    it('should show movie type', () => {
		// assignment 1 
    });
    
    it('should show movie director', () => {
		// assignment 1 
    })
    
    it('should show movie box office', () => {
		// assignment 1 
	});

	it('should show country', () => {
		// assignment 1 
    });
    
    it('should show actors', () => {
		// assignment 1 
    });
    
    it('should show genre', () => {
		// assignment 1 
    });
    
    it('should show movie Poster', () => {
		// assignment 1 
	});

});
