import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ICountriesDto, ICreateCountriesRequest} from '../models/interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {
  }

  public saveCountry(request: ICreateCountriesRequest): Observable<ICountriesDto> {
    return this.http.post<ICountriesDto>(`${environment.tuCajaExpressApi}/countries/save`, request);
  }

  public updateCountry(request: ICreateCountriesRequest): Observable<ICountriesDto> {
    return this.http.put<ICountriesDto>(`${environment.tuCajaExpressApi}/countries/update`, request);
  }

  public searchCountry(page: number, size: number, by: string, direction: string): Observable<ICountriesDto> {
    return this.http.get<ICountriesDto>(`${environment.tuCajaExpressApi}/countries/search/all`);
  }

  public searchCountryById(id: string): Observable<ICountriesDto> {
    return this.http.get<ICountriesDto>(`${environment.tuCajaExpressApi}/countries/search/byId?id=${id}`);
  }

  public searchCountryByStatus(status: string): Observable<ICountriesDto> {
    return this.http.get<ICountriesDto>(`${environment.tuCajaExpressApi}/countries/search/byStatus?id=${status}`);
  }

  public searchCountryByCode(code: string): Observable<ICountriesDto> {
    return this.http.get<ICountriesDto>(`${environment.tuCajaExpressApi}/countries/search/byCode?id=${code}`);
  }

  public deleteCountry(id: string, user: string): Observable<string> {
    return this.http.delete<string>(`${environment.tuCajaExpressApi}/countries/remove?id=${id}&user=${user}`);
  }
}
