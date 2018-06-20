import { TestBed, inject } from '@angular/core/testing';

import { TracauService } from './tracau.service';

describe('TracauService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TracauService]
    });
  });

  it('should be created', inject([TracauService], (service: TracauService) => {
    expect(service).toBeTruthy();
  }));
});
