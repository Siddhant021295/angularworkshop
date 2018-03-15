import { TestBed, inject } from '@angular/core/testing';

import { HttpstudentService } from './httpstudent.service';

describe('HttpstudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpstudentService]
    });
  });

  it('should be created', inject([HttpstudentService], (service: HttpstudentService) => {
    expect(service).toBeTruthy();
  }));
});
