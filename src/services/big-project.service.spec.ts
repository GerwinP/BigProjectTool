import { TestBed } from '@angular/core/testing';

import { BigProjectService } from './big-project.service';

describe('BigProjectService', () => {
  let service: BigProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
