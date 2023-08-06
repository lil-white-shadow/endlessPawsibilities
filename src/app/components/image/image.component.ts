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

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImage();
  }
  
  getRandomImage() {
    this.apiResponse = this.imageService.getRandomImage().subscribe(
      response => {
        this.apiResponse = response;
        this.apiResponse.status === "success" ? this.imageUrl = this.apiResponse.message : null;
        console.log(this.imageUrl);
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
