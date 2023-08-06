import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url:string = 'https://dog.ceo/api/breeds/image/random';
  url2:string = 'https://dog.ceo/api/breed/'

  imageByBreed = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) {}

  getRandomImage() {
    return this.http.get(this.url);
  }

  getImageByBreed(breed:string) {
    return this.http.get(this.url2 + breed + '/images/random');
  }
  
  setImage(url3:string) {
    this.imageByBreed.next(url3); 
  }

  getImage(): Observable<any> {
    return this.imageByBreed.asObservable();
  }

}
