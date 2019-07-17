import { TestBed } from '@angular/core/testing';

import { QlUserService } from './ql-user.service';

describe('QlUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QlUserService = TestBed.get(QlUserService);
    expect(service).toBeTruthy();
  });
});
