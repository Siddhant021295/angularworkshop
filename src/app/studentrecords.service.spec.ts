import { TestBed, inject } from '@angular/core/testing';

import { StudentrecordsService } from './studentrecords.service';

describe('StudentrecordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentrecordsService]
    });
  });

  it('should be created', inject([StudentrecordsService], (service: StudentrecordsService) => {
    expect(service).toBeTruthy();
  }));
});
