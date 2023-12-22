import { TestBed } from '@angular/core/testing';

import { HttpService } from './http-servc.service';

describe('HttpServcService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
