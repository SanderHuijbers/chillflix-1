import {IFilmService} from '../../services/film.service.interface';
import {MovieDetail} from '../../../../../shared/models/movie-detail.model';
import {Observable, of} from 'rxjs';
import {Film} from '../../models/film';

export class FilmSearchFilmServiceMock implements IFilmService{
	filmDetailsById$(imdbId: string): Observable<MovieDetail> {
		return of(FilmSearchFilmServiceMock.filmMock)
	}

	search$(title: string): Observable<Film[]> {
		return of([
            new Film('test poster', 'test title', 'test type', 6, 'test imdbId')
        ]);
	}

	public static filmMock = new MovieDetail(
		'testmovie',
		'testyear',
		'testrated',
		'testreleased',
		'testruntime',
		'testgenre',
		'testdirector',
		'testwriter',
		'testactors',
		'testplot',
		'testlanguage',
		'testcountry',
		'testawards',
		'testposter',
		'testmetascore',
		'testrating',
		'testvotes',
		'testimdbid',
		'testtype',
		'testdvd',
		'testboxoffice',
		'testproduction',
		'testwebsite',
		'testresponse',
	);
}
