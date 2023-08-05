import { Component, OnInit } from '@angular/core';
import { Breed, Subbreed } from 'src/app/models/breed';
import { BreedsService } from 'src/app/services/breeds.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

  apiResponse: any;
  breedArr: [string, [unknown]][] | undefined;

  constructor(private breedsService: BreedsService) { }

  ngOnInit() {
    this.getBreeds();
  }
  
  getBreeds() {
    this.apiResponse = this.breedsService.getBreeds().subscribe(
      (response: any) => {
        this.apiResponse = response;
        this.apiResponse.status === "success" ? this.breedArr = Object.entries(this.apiResponse.message)  : null;
        console.log(this.breedArr);
      }
    );
  }
}
