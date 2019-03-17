import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Observer, of, ReplaySubject, Subject} from 'rxjs';
import {Film} from '../../models/film';
import {map, share, shareReplay, take, takeLast, tap} from 'rxjs/operators';
import {promise} from 'selenium-webdriver';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	constructor() {
	}

	ngOnInit() {
		/*const movie$: Observable<Film> = of(new Film("http://www.poster.nl", "captain marvel", "movie", "1990", "ff29793"))
		const helloGetService: Observable<string> = Observable.create(function(observer: Observer<string>) {
			console.log("producer called");
			observer.next('appel');
			observer.next('peer');
			observer.next('banaan');
			observer.next('meloen');
		});

		const getHello$ = helloGetService.pipe();

		getHello$.subscribe(item => console.log(item));
		getHello$.subscribe(item => console.log(item));
		getHello$.subscribe(item => console.log(item));
		getHello$.subscribe(item => console.log(item));*/

		/*const myPromise = new Promise((resolve, reject) => {
			if( true) {
				resolve(1);
			}
			else {
				reject(2);
			}
		});

		myPromise.then(data => console.log(data));*/

		/*const helloGetService$: Observable<string> = Observable.create(function(observer: Observer<string>) {
			observer.next('appel');
			observer.next('peer');
			observer.next('banaan');
			observer.next('meloen');
		});*/

		// const mySubject = new ReplaySubject();
		//
		// mySubject.next(1);
		/*mySubject.next(2);
		mySubject.next(3);*/


		// component
		/*mySubject
			.pipe(
				tap(console.log),
				map(number => number.toString() + "dit is een string geworden"),
				tap(console.log),
			)
			.subscribe();*/




	}
}
