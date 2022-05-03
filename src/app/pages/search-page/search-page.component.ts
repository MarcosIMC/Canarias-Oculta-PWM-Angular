import { Component, OnInit } from '@angular/core';
import {JsonService} from "../../services/json.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers:[JsonService]
})
export class SearchPageComponent implements OnInit {
  articles:any[];

  constructor(private _jsonService: JsonService) {
    this.articles = this._jsonService.getArticles();
  }

  ngOnInit(): void {
  }

}
