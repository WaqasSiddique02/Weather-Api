import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-info',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './weather-info.component.html',
  styleUrl: './weather-info.component.css'
})

export class WeatherInfoComponent {
  private apikey="27b90d40b2bd6e7de15fb1e3bab3ed23";
  cityName:string="";
  result:any="";
  imageURL:string="";

  constructor(private http:HttpClient){}

  getWeatherData(){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.apikey}&units=metric`;
  this.http.get<string>(url).subscribe(response=>{
    this.result=response;

    console.log(this.result);
    const icon=this.result.weather[0].icon;
    this.imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";    
    this.cityName="";
  }
  ,error=>{
    console.error("Error fetching the data");
  }
)};
}