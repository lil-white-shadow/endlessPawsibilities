import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Breed, Subbreed } from 'src/app/models/breed';
import { BreedsService } from 'src/app/services/breeds.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

  breedResponse: any;
  breedArr: [string, [unknown]][] | undefined;
  
  imageResponse: any;
  imageUrl!: string;

  constructor(private breedsService: BreedsService, private imageService: ImageService) { }

  ngOnInit() {
    this.getBreeds();
  }
  
  getBreeds() {
    this.breedResponse = this.breedsService.getBreeds().subscribe(
      (response: any) => {
        this.breedResponse = response;
        this.breedResponse.status === "success" ? this.breedArr = Object.entries(this.breedResponse.message)  : null;
      }
    );
  }

  getImageByBreed(breed:string) {
    this.imageResponse = this.imageService.getImageByBreed(breed).subscribe(
      (response: any) => {
        this.imageResponse = response;
        this.imageResponse.status === "success" ? this.imageUrl = this.imageResponse.message : null;
        this.imageService.setImage(this.imageUrl);
      }
    );
  }
}
