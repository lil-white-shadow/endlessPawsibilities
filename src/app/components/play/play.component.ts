import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  playInstruction: string = "An image of a dog will be displayed. Identify its' breed correctly.";
  continueButton: string = "Continue";

  constructor() { }

  ngOnInit() {
  }

}
