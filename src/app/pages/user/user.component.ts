import { Component, OnInit } from '@angular/core';
import {JsonService} from "../../services/json.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[JsonService]
})
export class UserComponent implements OnInit {
  private jsonService: JsonService;

  constructor(jsonService:JsonService) {
    this.jsonService = jsonService;
  }

  ngOnInit(): void {
  }

  getMyArticles() {
    return this.jsonService.getArticles();
  }

}
