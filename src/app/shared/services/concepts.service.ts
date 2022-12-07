import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {IConceptDto, ICreateConceptRequest} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConceptsService {

  constructor(private http: HttpClient) {
  }

  public saveConcept(request: ICreateConceptRequest): Observable<IConceptDto> {
    return this.http.post<IConceptDto>(`${environment.tuCajaExpressApi}/concepts/save`, request);
  }

  public updateConcept(request: ICreateConceptRequest): Observable<IConceptDto> {
    return this.http.put<IConceptDto>(`${environment.tuCajaExpressApi}/concepts/update`, request);
  }

  public searchConcept(page: number, size: number, by: string, direction: string): Observable<any> {
    return this.http.get(`${environment.tuCajaExpressApi}/concepts/search/all?page=${page}&size=${size}&by=${by}&direction=${direction}`);
  }

  public searchConceptById(id: string): Observable<any> {
    return this.http.get(`${environment.tuCajaExpressApi}/concepts/search/byId?id=${id}`);
  }

  public deleteConcept(id: string, user: string): Observable<string> {
    return this.http.delete<string>(`${environment.tuCajaExpressApi}/concepts/remove?id=${id}&user=${user}`);
  }
}
