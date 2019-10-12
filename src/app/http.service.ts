import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })

}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  serverUrl: string = "https://reqres.in/api/";

  constructor(private http: HttpClient) { }

  getHttp(url: string) {
    return this.http.get(this.serverUrl + url, httpOptions)
  }

  putHttp(url: string, data) {
    return this.http.put(this.serverUrl + url, data, httpOptions)
  }

  postHttp(url: string, data) {
    return this.http.post(this.serverUrl + url, data, httpOptions)
  }

  deleteHttp(url: string) {
    return this.http.post(this.serverUrl + url, httpOptions)
  }

}
