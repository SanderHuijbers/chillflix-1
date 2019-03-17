import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilmBucketComponent} from './film-bucket.component';
import {AppModule} from '../../../app.module';

describe('FilmBucketComponent', () => {
	let component: FilmBucketComponent;
	let fixture: ComponentFixture<FilmBucketComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [AppModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FilmBucketComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
