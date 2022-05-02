import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNavbarComponentComponent } from './vertical-navbar-component.component';

describe('VerticalNavbarComponentComponent', () => {
  let component: VerticalNavbarComponentComponent;
  let fixture: ComponentFixture<VerticalNavbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalNavbarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
