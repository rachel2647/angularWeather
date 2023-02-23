import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather3DaysComponent } from './weather3-days.component';

describe('Weather3DaysComponent', () => {
  let component: Weather3DaysComponent;
  let fixture: ComponentFixture<Weather3DaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Weather3DaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Weather3DaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
