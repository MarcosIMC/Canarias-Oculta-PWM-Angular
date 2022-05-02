import { Component, OnInit } from '@angular/core';
import {JsonService} from "../../services/json.service";

@Component({
  selector: 'app-island',
  templateUrl: './island.component.html',
  styleUrls: ['./island.component.css'],
  providers:[JsonService]
})
export class IslandComponent implements OnInit {
  importantArticle:any;
  articles:any[];
  constructor(private _jsonService: JsonService) {
    this.importantArticle=this._jsonService.getMainArticle();
    this.articles=this._jsonService.getArticles();
  }


  ngOnInit(): void {
  }

}
