import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DynamicService {

  body = {client_id:"CO-40",
  device:"1",
  device_id:"browser",
  app_version:"1",
  user_id:"115",
  admin_id:"115",
  brand_id:"108",
  is_panel:"1"}

  constructor(private http: HttpClient) { }
  token = 'IrAuCxwLhBO49H7iqAxLpJ6ZRfK47C0Ia2DHFFZn';
  postDataFromApi(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', this.token);
    const option = {headers}
    return this.http.post('https://benepik.in/yorker/api/brandForm',this.body, option)
  }
  
}

