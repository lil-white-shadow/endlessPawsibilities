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

  isPlay: boolean = false;

  apiResponse: any;
  imageUrl!: string;
  randomImageBreed!: string;

  userFeedback!: boolean;

  constructor(private imageService: ImageService, private breedsService: BreedsService, private userFeedbackService: UserFeedbackService) { }

  ngOnInit() {
    this.getImage();
    this.getUserFeedback();
  }
  
  getRandomImage() {
    this.userFeedback = false;
    this.isPlay = true;
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
        console.log("correct answer: " + this.randomImageBreed);
        this.breedsService.setAnswer(this.randomImageBreed);
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

  getUserFeedback() {
    this.userFeedbackService.getUserFeedback().subscribe(
      response => {
        this.userFeedback = response;
      }
    );
  }
}
