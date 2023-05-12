import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DynamicService {

  constructor(private http: HttpClient) { }
  token = 'IrAuCxwLhBO49H7iqAxLpJ6ZRfK47C0Ia2DHFFZn';
  getDataFromApi(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get('https://benepik.in/yorker/api/brandForm', { headers: headers });
  }
}
