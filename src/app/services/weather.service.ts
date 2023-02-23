import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http:HttpClient) { }
  
  getWeathers(city:string): Observable<JSON> {
    return this.http.get<JSON>(`https://localhost:7065/api/Weather/${city},${1}`)
  }
}
