import { Component, Input, OnInit } from '@angular/core';
import { BreedsService } from 'src/app/services/breeds.service';
import { ImageService } from 'src/app/services/image.service';
import { UserFeedbackService } from 'src/app/services/userFeedback.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() instruction: string = "";
  @Input() continueButton: string = "";
  @Input() isPlay: boolean = false;

  apiResponse: any;
  imageUrl!: string;
  imageBreed!: string;

  userFeedback!: boolean;

  constructor(private imageService: ImageService, private breedsService: BreedsService, private userFeedbackService: UserFeedbackService) { }

  ngOnInit() {
    this.getImage();
    this.getUserFeedback();
  }
  
  getRandomImage() {
    this.userFeedback = false;
    this.apiResponse = this.imageService.getRandomImage().subscribe(
      response => {
        this.apiResponse = response;
        this.apiResponse.status === "success" ? this.imageUrl = this.apiResponse.message : null;
        let imageBreedRaw = this.imageUrl.slice(this.imageUrl.indexOf('breeds/') + 7, this.imageUrl.lastIndexOf('/'));
        if(imageBreedRaw.indexOf('-') < 1) {
          this.imageBreed = imageBreedRaw;
        } else {
          let imageBreedArr = imageBreedRaw.split('-');
          this.imageBreed = imageBreedArr.reverse().join(' ');
        }
        console.log("correct answer: " + this.imageBreed);
        this.breedsService.setAnswer(this.imageBreed);
      }
    );
  }

  getImage() {
    this.imageService.getImage().subscribe(
      response => {
        this.imageUrl = response;
        let imageBreedRaw = this.imageUrl.slice(this.imageUrl.indexOf('breeds/') + 7, this.imageUrl.lastIndexOf('/'));
        if(imageBreedRaw.indexOf('-') < 1) {
          this.imageBreed = imageBreedRaw;
        } else {
          let imageBreedArr = imageBreedRaw.split('-');
          this.imageBreed = imageBreedArr.reverse().join(' ');
        }
        console.log("breed shown: " + this.imageBreed);
      }
    );
  }

  getUserFeedback() {
    this.userFeedbackService.getUserFeedback().subscribe(
      response => {
        this.userFeedback = response;
      }
    );
  }
}
