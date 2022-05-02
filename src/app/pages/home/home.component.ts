import { Component, OnInit } from '@angular/core';
import {JsonService} from "../../services/json.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[JsonService]
})
export class HomeComponent implements OnInit {
  articles:any[];
  constructor(private _jsonService: JsonService) {
    this.articles=this._jsonService.getArticles();
  }

  ngOnInit(): void {
  }

}
