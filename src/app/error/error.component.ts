import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage : string = "Oh Snap!! There was error!"
  constructor() { }

  ngOnInit(): void {
  }

}
