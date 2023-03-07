import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private http: HttpClient) { }

  get(url: string, params?: HttpParams): Observable<any> {

    console.log('url: ' + url);

    return this.http.get(url, { params });
  }

  post(url: string, body: any) {
    var header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, JSON.stringify(body), { headers: header });
  }

  put(url: string, body: any, headers?: HttpHeaders): Observable<any> {
    return this.http.put(url, body, { headers });
  }

  delete(url: string, headers?: HttpHeaders): Observable<any> {
    return this.http.delete(url, { headers });
  }

}