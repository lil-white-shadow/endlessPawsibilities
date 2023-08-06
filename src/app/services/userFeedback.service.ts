import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserFeedbackService {

  feedback = new BehaviorSubject<boolean>(false);

  constructor() { }

  setUserFeedback(feedback: boolean) {
    this.feedback.next(feedback);
  }

  getUserFeedback(): Observable<any> {
    return this.feedback.asObservable();
  }

}
