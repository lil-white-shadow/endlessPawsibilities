import { Component, OnInit } from '@angular/core';
import { BreedsService } from 'src/app/services/breeds.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-breedsInPlay',
  templateUrl: './breedsInPlay.component.html',
  styleUrls: ['./breedsInPlay.component.css']
})
export class BreedsInPlayComponent implements OnInit {

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
