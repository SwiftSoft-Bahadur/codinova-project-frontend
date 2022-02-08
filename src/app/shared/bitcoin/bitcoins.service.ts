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
    return this.http.get<any>('https://rest.coinapi.io/v1/exchanges?apikey=4BEB5857-A77E-4027-801A-E954FA3CA51E');
  }

  getIcons(): Observable<any> {
    return this.http.get<any>('https://rest.coinapi.io/v1/exchanges/icons/32?apikey=4BEB5857-A77E-4027-801A-E954FA3CA51E');
  }

  storeExchanges(data: any): Observable<any> {
    return this.http.post(this.API_URL, data)
  }

  getMyDbStockData() {
    return this.http.get(this.API_URL);
  }
}
