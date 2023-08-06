import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserFeedbackService {

  feedback = new Subject<boolean>;

  constructor() { }

  setUserFeedback(feedback: boolean) {
    this.feedback.next(feedback);
  }

  getUserFeedback(): Observable<any> {
    return this.feedback.asObservable();
  }

}
