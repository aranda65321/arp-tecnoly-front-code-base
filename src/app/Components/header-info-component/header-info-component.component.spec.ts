import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInfoComponentComponent } from './header-info-component.component';

describe('HeaderInfoComponentComponent', () => {
  let component: HeaderInfoComponentComponent;
  let fixture: ComponentFixture<HeaderInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInfoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
