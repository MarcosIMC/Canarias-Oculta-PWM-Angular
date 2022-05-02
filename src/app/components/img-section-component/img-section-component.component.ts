import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-section-component',
  templateUrl: './img-section-component.component.html',
  styleUrls: ['./img-section-component.component.css']
})
export class ImgSectionComponentComponent implements OnInit {
  @Input() article:any;
  constructor() { }

  ngOnInit(): void {
  }

}
