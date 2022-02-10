import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinsService {
  API_URL = 'http://localhost:8080/api/stocks'


  constructor(private http: HttpClient) { }

  getExchages(): Observable<any> {
    return this.http.get<any>('https://rest.coinapi.io/v1/exchanges?apikey=CB1D352F-23E7-4D64-97AC-FB5AEF4839F');
  }

  getIcons(): Observable<any> {
    return this.http.get<any>('https://rest.coinapi.io/v1/exchanges/icons/32?apikey=CB1D352F-23E7-4D64-97AC-FB5AEF4839F');
  }

  storeExchanges(data: any): Observable<any> {
    return this.http.post(this.API_URL, data)
  }

  getMyDbStockData() {
    return this.http.get(this.API_URL);
  }
}
