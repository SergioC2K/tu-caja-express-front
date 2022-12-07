import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  ICreateMovementTypesRequest,
  IMovementDto,
  IUpdateMovementTypesRequest
} from "../models/interfaces/movement-types";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class MovementTypesService {

  private apiUrl: string = `${environment.tuCajaExpressApi}/movement-types`;

  constructor(private http: HttpClient) {
  }

  public createMovementType(request: ICreateMovementTypesRequest): Observable<IMovementDto> {
    return this.http.post<IMovementDto>(`${this.apiUrl}/save`, request);
  }

  public updateMovementType(request: IUpdateMovementTypesRequest): Observable<IMovementDto> {
    return this.http.put<IMovementDto>(`${this.apiUrl}/update`, request);
  }

  public getMovementType(page: number, size: number, by: string, direction: string): Observable<IMovementDto> {
    const setDirection: string = direction ? direction : "ASC";
    return this.http.get<IMovementDto>(`${this.apiUrl}/all?page=${page}&size=${size}&by=${by}&direction=${setDirection}`);
  }

  public getMovementTypeById(id: string): Observable<IMovementDto> {
    return this.http.get<IMovementDto>(`${this.apiUrl}/byId?id=${id}`);
  }

  public RemoveMovementTypeById(id: string, user: string): Observable<IMovementDto> {
    return this.http.get<IMovementDto>(`${this.apiUrl}/remove?id=${id}&user=${user}`);
  }
}
