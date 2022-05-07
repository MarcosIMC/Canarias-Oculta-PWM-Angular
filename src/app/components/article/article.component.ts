import {Component, Input, OnInit} from '@angular/core';
import {JsonService} from "../../services/json.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article:any;
  constructor() {}

  ngOnInit(): void {
  }

}
