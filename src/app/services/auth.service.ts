import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public http: HttpClient) {}

  public login(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1',
    });

    return this.http.post<any>(environment.apiUrl + '/api/login', data, {
      headers,
    });
  }
}
