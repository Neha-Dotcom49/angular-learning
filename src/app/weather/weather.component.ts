import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
 
  weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
  weatherParams = '&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534';
  text = 'India';
  errorMessage : string = ''; // To store error message
  data: any;
  constructor(private _httpClient: HttpClient) { }

  
  ngOnInit(): void {
    // weather api endpoint
    const weatherAPIUrl = `${this.weatherAPI}${this.text}${this.weatherParams}`;
    this._httpClient.get(weatherAPIUrl).pipe(
      // Handle errors using catchError
      catchError(error => {
        console.log('Error occured', error);
        this.errorMessage = 'Failed to fetch weather data. Please try again later';
        console.log(this.errorMessage);
        
        return of(null);
      })
    ).subscribe(res => {
      if (res) {
        this.data = res;
        console.log(this.data);
        
      }
    })
  }
  

}
