import { TestBed } from '@angular/core/testing';

import { TestDatabaseService } from './test-database.service';

describe('TestDatabaseService', () => {
  let service: TestDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
