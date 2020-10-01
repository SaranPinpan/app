import { Component, OnInit } from '@angular/core';

declare var require: any

@Component({
  selector: 'app-express',
  templateUrl: './express.component.html',
  styleUrls: ['./express.component.css']
})
export class ExpressComponent implements OnInit {

  img = '../../assets/img.png'

  constructor() { }

  ngOnInit(): void {
  }

}
