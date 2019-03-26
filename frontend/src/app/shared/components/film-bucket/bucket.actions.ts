import {Action} from '@ngrx/store';
import {Film} from '../../../models/film';


export enum BucketActionTypes {
	add = '[BucketList Component] add to bucket',
	remove = '[BucketList Component] remove from bucket'
}

export class AddToBucket implements Action {
	readonly type = BucketActionTypes.add;

	constructor(public payload: Film) {
	}
}

export class RemoveFromBucket implements Action {
	readonly type = BucketActionTypes.remove;

	constructor(public payload: Film) {
	}
}

export type BucketActionUnion = AddToBucket | RemoveFromBucket;
