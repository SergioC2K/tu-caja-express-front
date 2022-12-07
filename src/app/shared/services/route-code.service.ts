import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ICreateRouteCodeRequest, IRouteCodeDto, IUpdateRouteCodeRequest } from "../models/interfaces/route-code";

@Injectable({
  providedIn: "root"
})
export class RouteCodeService {

  private apiUrl: string = `${environment.tuCajaExpressApi}/route-code`;

  constructor(private http: HttpClient) {
  }

  public createRouteCode(request: ICreateRouteCodeRequest): Observable<IRouteCodeDto> {
    return this.http.post<IRouteCodeDto>(`${this.apiUrl}/save`, request);
  }

  public UpdateRouteCode(request: IUpdateRouteCodeRequest): Observable<IRouteCodeDto> {
    return this.http.put<IRouteCodeDto>(`${this.apiUrl}/update`, request);
  }

  public getRouteCode(page: number, size: number, by: string, direction: string): Observable<IRouteCodeDto> {
    const setDirection: string = direction ? direction : "ASC";
    return this.http.get<IRouteCodeDto>(`${this.apiUrl}/search/all?page=${page}&size=${size}&by=${by}&direction=${setDirection}`);
  }

  public getRouteCodeById(id: string): Observable<IRouteCodeDto> {
    return this.http.get<IRouteCodeDto>(`${this.apiUrl}/search/byId?id=${id}`);
  }

  public getRouteCodeZipCode(zipCode: string): Observable<IRouteCodeDto> {
    return this.http.get<IRouteCodeDto>(`${this.apiUrl}/search/byZipCode?zipCode=${zipCode}`);
  }

  public getRouteCodeByRouteId(routeId: string): Observable<IRouteCodeDto> {
    return this.http.get<IRouteCodeDto>(`${this.apiUrl}/search/byRouteId?routeId=${routeId}`);
  }

  public RemoveRouteCodeById(id: string, user: string): Observable<IRouteCodeDto> {
    return this.http.delete<IRouteCodeDto>(`${this.apiUrl}/remove?id=${id}&user=${user}`);
  }
}
