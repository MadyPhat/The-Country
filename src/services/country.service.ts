import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Countries } from '../models/county.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  public getCountry(countryName?: string): Observable<Countries> {
    let url = this.initUrl(countryName);
    return this.http.get<Countries>(url, { responseType: 'json'});
  }

  private initUrl(countryName?: string) {
    let url = environment.apiUrl;
    if (countryName) {
      return `${url}name/${countryName}`;
    }
    return `${url}all`;
  }
}
