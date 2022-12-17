import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IResAgencies, IAgency, IAgencySave } from '../models/interfaces/agencies';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  private apiUrl: string = `${environment.tuCajaExpressApi}/agencies`;

  constructor(private http: HttpClient) {
  }

  public searchAgency(page: number, size: number, by: string, direction: string): Observable<IResAgencies> {
    return this.http
      .get<IResAgencies>(`${this.apiUrl}/search/all`)
      .pipe(
        retry(1),
        map((iResAgencies: IResAgencies) => {
          return iResAgencies;
        }),
        catchError(this.handleError)
      );
  }

  public saveAgency(request: IAgencySave): Observable<IAgency> {
    return this.http.post<IAgency>(`${this.apiUrl}/save`, request)
      .pipe(
        retry(1),
        map((iAgency: IAgency) => {
          return iAgency;
        }),
        catchError(this.handleError));
  }

  /*public updateAgency(request: ICreateAgenciesRequest): Observable<IAgenciesDto> {
    return this.http.put<IAgenciesDto>(`${this.apiUrl}/update`, request);
  }
 
  public searchAgencyById(id: string): Observable<IAgenciesDto> {
    return this.http.get<IAgenciesDto>(`${this.apiUrl}/search/byId?id=${id}`);
  }
 
  public searchAgencyByStatus(status: string): Observable<IAgenciesDto> {
    return this.http.get<IAgenciesDto>(`${this.apiUrl}/search/byStatus?id=${status}`);
  }
 
  public searchAgencyByCode(code: string): Observable<IAgenciesDto> {
    return this.http.get<IAgenciesDto>(`${this.apiUrl}/search/byCode?id=${code}`);
  }
 
  public deleteAgency(id: string, user: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/remove?id=${id}&user=${user}`);
  }*/

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error('An error occurred:', error);
    }
    return throwError(error);
  }
}
