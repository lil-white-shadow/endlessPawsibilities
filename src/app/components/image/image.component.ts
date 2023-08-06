import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() instruction: string = "";
  @Input() continueButton: string = "";

  apiResponse: any;
  imageUrl!: string;
  randomImageBreed!: string;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImage();
  }
  
  getRandomImage() {
    this.apiResponse = this.imageService.getRandomImage().subscribe(
      response => {
        this.apiResponse = response;
        this.apiResponse.status === "success" ? this.imageUrl = this.apiResponse.message : null;
        let randomImageBreedRaw = this.imageUrl.slice(this.imageUrl.indexOf('breeds/') + 7, this.imageUrl.lastIndexOf('/'));
        if(randomImageBreedRaw.indexOf('-') < 1) {
          this.randomImageBreed = randomImageBreedRaw;
        } else {
          let randomImageBreedArr = randomImageBreedRaw.split('-');
          this.randomImageBreed = randomImageBreedArr.reverse().join(' ');
        }
      }
    );
  }

  getImage() {
    this.imageService.getImage().subscribe(
      response => {
        this.imageUrl = response;
      }
    );
  }
}
