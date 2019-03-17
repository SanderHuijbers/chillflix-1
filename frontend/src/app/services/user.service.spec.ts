import {TestBed} from '@angular/core/testing';

import {UsersService} from './users.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('UsersService', () => {
	let usersService: UsersService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [HttpClientTestingModule]
			});

			// Inject the http service and test controller for each test
			usersService = TestBed.get(UsersService);
			httpTestingController = TestBed.get(HttpTestingController);
		}
	);

	describe('saveUser',  () => {
		it('should save a user and return saved user', () => {
			const testData = "mybearertoken";

			// Make an HTTP GET request
			usersService.saveUser({
				userName: "maurice@test.com",
				password: "secret123$D",
				age: 29
			}).subscribe(response => expect(response).toEqual(testData));

			const req = httpTestingController.expectOne('api/users');
			// Assert that the request is a POST.
			expect(req.request.method).toEqual('POST');
			// Respond with mock data, causing Observable to resolve.
			// Subscribe callback asserts that correct data was returned.
			req.flush(testData);
			// Finally, assert that there are no outstanding requests.
			httpTestingController.verify();
		});
	});

});
