import { TestBed } from '@angular/core/testing';

import { JsBridgeService } from './js-bridge.service';

describe('JsBridgeService', () => {
  let service: JsBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
