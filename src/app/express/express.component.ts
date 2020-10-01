import { Component, OnInit } from '@angular/core';

declare var require: any

@Component({
  selector: 'app-express',
  templateUrl: './express.component.html',
  styleUrls: ['./express.component.css']
})
export class ExpressComponent implements OnInit {

  public image = require('../../assets/img.png').default

  constructor() { }

  ngOnInit(): void {
  }

}
