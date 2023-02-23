import { Component, OnInit } from '@angular/core';
import  weatherModel  from 'src/app/weatherModel';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'weather3-days',
  templateUrl: './weather3-days.component.html',
  styleUrls: ['./weather3-days.component.css']
})
export class Weather3DaysComponent implements OnInit {

  city: string = "";
  weathers = [new weatherModel("",null,null),new weatherModel("",null,null),new weatherModel("",null,null)];
  json: any;
  forecast: any;
  forecastday: any;
  show=false

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather3Days() {
    this.weatherService.getWeathers(this.city).subscribe(succ => {
      this.json = succ; console.log(succ)
      this.forecast = this.json["forecast"];
      console.log(this.forecast)
      this.forecastday = this.forecast["forecastday"]
      console.log(this.forecastday)

      for (let index = 0; index < 3; index++) {
        this.weathers[index].date = this.forecastday[index].date;
        this.weathers[index].avgtemp_c = this.forecastday[index].day.avgtemp_c;
        this.weathers[index].avgvis_km = this.forecastday[index].day.avgvis_km;
        console.log(this.weathers[index])
      }
      this.show=true;
    }
      , err => { console.log("error") })

  }
}
