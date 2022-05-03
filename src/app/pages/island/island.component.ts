import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JsonService} from "../../services/json.service";

@Component({
  selector: 'app-island',
  templateUrl: './island.component.html',
  styleUrls: ['./island.component.css'],
  providers:[JsonService]
})
export class IslandComponent implements OnInit {
  island: String | undefined;
  importantArticle:any;
  articles:any[];
  constructor(private route:ActivatedRoute, private _jsonService: JsonService) {
    this.importantArticle=this._jsonService.getMainArticle();
    this.articles=this._jsonService.getArticles();
  }


  ngOnInit(): void {
    const routeParams= this.route.snapshot.paramMap;
    this.island = String(
      routeParams.get('islandName')
    );
  }

}
