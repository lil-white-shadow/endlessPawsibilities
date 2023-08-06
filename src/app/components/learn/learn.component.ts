import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  learnInstruction: string = "Click on a breed name or the button below to get started.";

  constructor() { }

  ngOnInit() {
  }

}
