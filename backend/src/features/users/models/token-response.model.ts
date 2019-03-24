import {IToken} from '../../../../../shared/interfaces/token-response.interface';

export class TokenResponse implements IToken {
	constructor(public readonly value: string,
	            public readonly userFullName: string) {
	}
}
