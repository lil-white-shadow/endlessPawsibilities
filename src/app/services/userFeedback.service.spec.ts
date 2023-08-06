/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserFeedbackService } from './userFeedback.service';

describe('Service: UserFeedback', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFeedbackService]
    });
  });

  it('should ...', inject([UserFeedbackService], (service: UserFeedbackService) => {
    expect(service).toBeTruthy();
  }));
});
