import { Component, OnInit } from '@angular/core';
import {JsonService} from "../../services/json.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  articles:any[];
  constructor(private _jsonService: JsonService) {
    this.articles=this._jsonService.getCarouselArticles();
  }

  ngOnInit(): void {
  }

}
