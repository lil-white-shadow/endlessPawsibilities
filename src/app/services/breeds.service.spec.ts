/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BreedsService } from './breeds.service';

describe('Service: Breeds', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreedsService]
    });
  });

  it('should ...', inject([BreedsService], (service: BreedsService) => {
    expect(service).toBeTruthy();
  }));
});
