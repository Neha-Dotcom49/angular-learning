import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ECommeraceService {
  private apiUrl = 'https://vinted3.p.rapidapi.com/getSearch?country=us&page=1&order=newest_first';
  
  constructor(private _httpClient: HttpClient) { }
  
  getData(): Observable<any> {
 
    return this._httpClient.get<any>(this.apiUrl);
  }
}
