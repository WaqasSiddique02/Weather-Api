import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoComponent } from './weather-info.component';
import { FormsModule } from '@angular/forms';

describe('WeatherInfoComponent', () => {
  let component: WeatherInfoComponent;
  let fixture: ComponentFixture<WeatherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
