import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-section',
  templateUrl: './img-section.component.html',
  styleUrls: ['./img-section.component.css']
})
export class ImgSectionComponent implements OnInit {
  @Input() article:any;
  constructor() { }

  ngOnInit(): void {
  }

}
