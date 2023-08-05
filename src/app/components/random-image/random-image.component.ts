import { Component, OnInit } from '@angular/core';
import { RandomImageService } from 'src/app/services/random-image.service';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.css']
})
export class RandomImageComponent implements OnInit {

  apiResponse: any;
  imageUrl!: string;

  constructor(private randomImageService: RandomImageService) { }

  ngOnInit() {
    this.getRandomImage();
  }
  
  getRandomImage() {
    this.apiResponse = this.randomImageService.getRandomImage().subscribe(
      response => {
        this.apiResponse = response;
        this.apiResponse.status === "success" ? this.imageUrl = this.apiResponse.message : null;
        console.log(this.imageUrl);
      }
    );
  }

}
