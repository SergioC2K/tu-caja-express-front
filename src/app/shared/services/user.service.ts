import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICreateUserResponse, IUserResponse } from "../models";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private apiUrl: string = `tucajaexpress-api/user`;

  constructor(private http: HttpClient) {
  }

  public getUserInfo(id: string | number): Promise<ICreateUserResponse | undefined> {
    return this.http.get<ICreateUserResponse>(`${this.apiUrl}/byId?id=${id}`).toPromise();
  }
}
