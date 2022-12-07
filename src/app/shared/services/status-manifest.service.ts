import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import {
  ICreateStatusManifestRequest,
  IStatusManifestDto,
  IUpdateStatusManifestRequest
} from "../models/interfaces/status-manifest";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StatusManifestService {
  private apiUrl: string = `${environment.tuCajaExpressApi}/status-manifest`;

  constructor(private http: HttpClient) {
  }

  public createStatusManifest(request: ICreateStatusManifestRequest): Observable<IStatusManifestDto> {
    return this.http.post<IStatusManifestDto>(`${this.apiUrl}/save`, request);
  }

  public UpdateStatusManifest(request: IUpdateStatusManifestRequest): Observable<IStatusManifestDto> {
    return this.http.put<IStatusManifestDto>(`${this.apiUrl}/update`, request);
  }

  public getStatusManifest(page: number, size: number, by: string, direction: string): Observable<IStatusManifestDto> {
    const setDirection: string = direction ? direction : "ASC";
    return this.http.get<IStatusManifestDto>(`${this.apiUrl}/search/all?page=${page}&size=${size}&by=${by}&direction=${setDirection}`);
  }

  public getStatusManifestById(id: string): Observable<IStatusManifestDto> {
    return this.http.get<IStatusManifestDto>(`${this.apiUrl}/search/byId?id=${id}`);
  }

  public getStatusManifestByStatus(status: string, page: number, size: number, by: string, direction: string): Observable<IStatusManifestDto> {
    const setDirection: string = direction ? direction : "ASC";
    return this.http.get<IStatusManifestDto>(`${this.apiUrl}/search/byStatus?status=${status}&${page}&size=${size}&by=${by}&direction=${setDirection}`);
  }

  public RemoveStatusManifestById(id: string, user: string): Observable<IStatusManifestDto> {
    return this.http.delete<IStatusManifestDto>(`${this.apiUrl}/remove?id=${id}&user=${user}`);
  }
}
