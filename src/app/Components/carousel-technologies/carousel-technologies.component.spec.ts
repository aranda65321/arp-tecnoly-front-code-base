import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTechnologiesComponent } from './carousel-technologies.component';

describe('CarouselTechnologiesComponent', () => {
  let component: CarouselTechnologiesComponent;
  let fixture: ComponentFixture<CarouselTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
