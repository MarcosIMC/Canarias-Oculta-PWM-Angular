import { Component, OnInit } from '@angular/core';
import {JsonService} from "../../services/json.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[JsonService]
})
export class HomeComponent implements OnInit {
  importantArticle:any;
  sideArticle1:any;
  sideArticle2:any;
  articles:any[];
  constructor(private _jsonService: JsonService) {
    this.importantArticle=this._jsonService.getMainArticle();
    this.sideArticle1=this._jsonService.getSideArticle1();
    this.sideArticle2=this._jsonService.getSideArticle2();
    this.articles=this._jsonService.getAdditionalArticles();
  }

  ngOnInit(): void {
  }

}
