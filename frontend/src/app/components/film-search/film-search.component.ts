import {Component} from '@angular/core';
import {Film} from '../../models/film';
import {FilmService} from '../../services/film.service';
import {take, tap} from 'rxjs/operators';
import {Animations} from '../../shared/utils/animations';

/*assignment 4.1 refactor the movie search form to work reactive*/

/*assignment 4.2 do movie search on key up*/

/*assignment 4.3 add a debouncetime to prevent server overloading on keyup
* HINT: Observable.pipe(debounceTime(500)*/

@Component({
	selector: 'app-film-search',
	templateUrl: './film-search.component.html',
	styleUrls: ['./film-search.component.scss'],
	animations: [Animations.fadeInOut]
})
export class FilmSearchComponent {
	public films: Film[] | undefined | null = undefined;
	public userInput: string | undefined = undefined;
	public bucket: Film[] = [];

	constructor(private filmsService: FilmService) {
	}

	public handleSearchInputChange(input: string): void {
		this.films = null;
		this.filmsService.search$(input)
			.pipe(
				take(1),
				tap(filmResponse => this.films = filmResponse),
			).subscribe();
	}

	public handleOnAddToBucket(film: Film): void {
		this.bucket = [...this.bucket, film];
	}

	public handleOnRemoveFilm(filmToRemove: Film): void {
		this.bucket = this.bucket.filter(film => film.imdbId !== filmToRemove.imdbId);
	}
}
