import {Component, OnInit} from '@angular/core';
import {Animations} from '../../shared/utils/animations';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	animations: [Animations.fadeInOut]
})
export class HomeComponent implements OnInit {
	constructor() {
	}

	ngOnInit() {
	}
}
