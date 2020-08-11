import { TestBed } from '@angular/core/testing';

import { SendDataToDetailsService } from './send-data-to-details.service';

describe('SendDataToDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendDataToDetailsService = TestBed.get(SendDataToDetailsService);
    expect(service).toBeTruthy();
  });
});
