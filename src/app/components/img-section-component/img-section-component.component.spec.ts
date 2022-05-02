import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSectionComponentComponent } from './img-section-component.component';

describe('ImgSectionComponentComponent', () => {
  let component: ImgSectionComponentComponent;
  let fixture: ComponentFixture<ImgSectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgSectionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
