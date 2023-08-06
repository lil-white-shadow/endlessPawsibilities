import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  url:string = 'https://dog.ceo/api/breeds/list/all';

  answer = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }

  getBreeds() {
    return this.http.get(this.url);
  }

  setAnswer(answerString:string) {
    this.answer.next(answerString); 
  }

  getAnswer(): Observable<any> {
    return this.answer.asObservable();
  }
}
