import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  url:string = 'https://dog.ceo/api/breeds/list/all';

  constructor(private http: HttpClient) { }

  getBreeds() {
    return this.http.get(this.url);
  }

}
