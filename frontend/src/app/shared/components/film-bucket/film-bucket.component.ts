import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from '../../../models/film';

@Component({
	selector: 'app-film-bucket',
	templateUrl: './film-bucket.component.html',
	styleUrls: ['./film-bucket.component.scss']
})
export class FilmBucketComponent implements OnInit {
	// assignment 2 BONUS FOR DIE HARDS: implement ngrx State management for the movie bucket instead of working with @Input()/@Output() decorators
	@Input() public bucketFilms: Film[] = [];
	@Output() public onRemoveFilm = new EventEmitter<Film>();

	constructor() {
	}

	ngOnInit() {
	}

	handleDeleteButtonClick(film: Film): void {
		this.onRemoveFilm.emit(film);
	}
}
