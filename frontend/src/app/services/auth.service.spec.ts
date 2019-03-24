import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AuthService', () => {

	let authService: AuthService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [HttpClientTestingModule]
			});

			// Inject the http service and test controller for each test
			authService = TestBed.get(AuthService);
			httpTestingController = TestBed.get(HttpTestingController);
		}
	);

	describe('login',  () => {

		it('should signin a user and return a token', () => {
			const testData = "mybearertoken";

			// Make an HTTP GET request
			authService.login({
				userName: "maurice@test.com",
				password: "secret123$D"
			}).subscribe(response => expect(response).toEqual(testData));

			const req = httpTestingController.expectOne('api/auth/login');
			// Assert that the request is a POST.
			expect(req.request.method).toEqual('POST');
			// Respond with mock data, causing Observable to resolve.
			// Subscribe callback asserts that correct data was returned.
			req.flush(testData);
			// Finally, assert that there are no outstanding requests.
			httpTestingController.verify();
		});

	})
});
