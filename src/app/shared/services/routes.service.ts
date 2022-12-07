import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ICreateRoutesRequest, IRoutesDto, IUpdateRoutesRequest } from "../models/interfaces/routes";


@Injectable({
  providedIn: "root"
})
export class RoutesService {

  private apiUrl: string = `${environment.tuCajaExpressApi}/routes`;

  constructor(private http: HttpClient) {
  }

  public createRoutes(request: ICreateRoutesRequest): Observable<IRoutesDto> {
    return this.http.post<IRoutesDto>(`${this.apiUrl}/save`, request);
  }

  public UpdateRoutes(request: IUpdateRoutesRequest): Observable<IRoutesDto> {
    return this.http.put<IRoutesDto>(`${this.apiUrl}/update`, request);
  }

  public getRoutes(page: number, size: number, by: string, direction: string): Observable<IRoutesDto> {
    const setDirection: string = direction ? direction : "ASC";
    return this.http.get<IRoutesDto>(`${this.apiUrl}/search/all?page=${page}&size=${size}&by=${by}&direction=${setDirection}`);
  }

  public getRoutesById(id: string): Observable<IRoutesDto> {
    return this.http.get<IRoutesDto>(`${this.apiUrl}/search/byId?id=${id}`);
  }

  public RemoveRoutesById(id: string, user: string): Observable<IRoutesDto> {
    return this.http.delete<IRoutesDto>(`${this.apiUrl}/remove?id=${id}&user=${user}`);
  }
}
