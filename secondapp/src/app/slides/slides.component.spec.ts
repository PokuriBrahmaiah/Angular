import { ComponentFixture, TestBed } from '@angular/core/testing';

import { slidesComponent } from './slides.component';

describe('slidesComponent', () => {
  let component: slidesComponent;
  let fixture: ComponentFixture<slidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ slidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(slidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
