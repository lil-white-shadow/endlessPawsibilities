import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RandomImageService {

  url:string = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) { }

  getRandomImage() {
    return this.http.get(this.url);
  }

}
