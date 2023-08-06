import { Component, Input, OnInit } from '@angular/core';
import { BreedsService } from 'src/app/services/breeds.service';
import { ImageService } from 'src/app/services/image.service';
import { UserFeedbackService } from 'src/app/services/userFeedback.service';

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

  breedAnswer!: string;

  clickedBreed!: string;

  constructor(private breedsService: BreedsService, private imageService: ImageService, private userFeedbackService: UserFeedbackService) { }

  ngOnInit() {
    this.getBreeds();
    this.getAnswer();
  }
  
  getBreeds() {
    this.breedResponse = this.breedsService.getBreeds().subscribe(
      (response: any) => {
        this.breedResponse = response;
        this.breedResponse.status === "success" ? this.breedArr = Object.entries(this.breedResponse.message)  : null;
      }
    );
  }

  checkBreed(breed:string) {
    this.clickedBreed = breed;
    if(this.breedAnswer === breed) {
      console.log('correct');
      this.userFeedbackService.setUserFeedback(true);
    } else {
      console.log('incorrect');
      this.userFeedbackService.setUserFeedback(false);
    }
  }

  getAnswer() {
    this.breedsService.getAnswer().subscribe(
      response => {
        this.breedAnswer = response;
      }
    );
  }
}
