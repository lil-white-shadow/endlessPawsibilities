/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomImageService } from './random-image.service';

describe('Service: RandomImage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomImageService]
    });
  });

  it('should ...', inject([RandomImageService], (service: RandomImageService) => {
    expect(service).toBeTruthy();
  }));
});
