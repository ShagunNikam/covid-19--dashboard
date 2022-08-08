import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  baseUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getHistoryData() : Observable <any> {
    const headers = { 
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': 'acf38f97bamshfe34d9cd3ea5a27p16a3cdjsne771ac4d1c85'
    }

    const reqUrl = this.baseUrl + 'history?country=india&day=2020-06-02'
    
    return this.http.get<any>(reqUrl,{ 'headers' : headers });
  }

}

