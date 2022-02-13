import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinsService {
  API_URL = 'http://localhost:8080/api/stocks'

  constructor(private http: HttpClient) { }
  // Getting data from coinApi
  getExchages(): Observable<any> {
    return this.http.get<any>('https://rest.coinapi.io/v1/exchanges');
  }

  getIcons(): Observable<any> {
    return this.http.get<any>('https://rest.coinapi.io/v1/exchanges/icons/32');
  }

  // Store on local database
  storeIcons(data: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/stocks/icons", data)
  }
  

}
