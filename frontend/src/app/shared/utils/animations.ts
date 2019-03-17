import {animate, state, style, transition, trigger} from "@angular/animations";

export class Animations {
	public static readonly fadeInOut =
		trigger("fadeInOut", [
			state('1', style({opacity: 1})),
			state('0', style({opacity: 0, display: 'none'})),
			state('*', style({opacity: 1})),
			state('void', style({opacity: 0, display: 'none'})),
			transition('1 => 0', animate('0.3s ease-in')),
			transition('0 => 1', animate('0.3s ease-out')),
			transition('* => void', animate('0.3s ease-out')),
			transition('void => *', animate('0.3s ease-out')),
			transition(':enter, :leave', animate('0.3s ease-out')) // needed for *ngIf based animation, just put @fadeInOut as attribute alongside an *ngIf
		]);


	public static readonly scaleInOut = trigger("scaleInOut", [
		state('true', style({opacity: 1, transform: 'scale(1.0)'})),
		state('false', style({opacity: 0, transform: 'scale(0.0)'})),
		state('1', style({transform: 'scale(1)'})),
		state('0', style({transform: 'scale(0)', display: 'none'})),
		state('*', style({transform: 'scale(1)'})),
		state('void', style({transform: 'scale(0)', display: 'none'})),
		transition('1 => 0', animate('0.3s ease-in')),
		transition('0 => 1', animate('0.3s ease-out')),
		transition('* => void', animate('0.3s ease-out')),
		transition('void => *', animate('0.3s ease-out')),
		transition(':enter, :leave', animate('0.3s ease-out')) // needed for *ngIf based animation, just put @fadeInOut as attribute alongside an *ngIf
	]);
}
