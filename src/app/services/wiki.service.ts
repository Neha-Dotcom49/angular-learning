import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WikiService {
  private apiUrl = 'https://en.wikipedia.org/w/api.php'; // Wikipedia API URL
  constructor(private http: HttpClient) { }
   // Method to search Wikipedia articles
   searchArticles(searchTerm: string): Observable<any> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      utf8: '1',
      srsearch: searchTerm, // Search term entered by the user
      origin: '*', // This enables cross-origin requests
    };

    return this.http.get(this.apiUrl, { params });
  }
}
