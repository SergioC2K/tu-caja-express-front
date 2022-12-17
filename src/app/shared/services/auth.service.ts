import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICreateUserRequest, ICreateUserResponse, ILoginRequest, ILoginResponse, IUserResponse } from "../models";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private apiUrl: string = `${environment.tuCajaExpressApi}/auth`;

  constructor(private http: HttpClient) {
  }

  public loginUser(request: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${this.apiUrl}/loginUser`, request);
  }

  public createUser(request: ICreateUserRequest): Observable<ICreateUserResponse> {
    return this.http.post<ICreateUserResponse>(`${this.apiUrl}/saveUser`, request);
  }

  public getTokenName(): string {
    return "TU-CAJA-AUTH-TOKEN";
  }

  public getUserInfoName(): string {
    return "TU-CAJA-AUTH-USER-INFO";
  }

  public setToken(value: string): void {
    window.localStorage.setItem(this.getTokenName(), value);
  }

  public deleteToken(): void {
    window.localStorage.removeItem(this.getTokenName());
  }

  public setUserInfo(value: any): void {
    window.localStorage.setItem(this.getUserInfoName(), JSON.stringify(value));
  }

  public getUserInfo(): IUserResponse {
    // @ts-ignore
    return JSON.parse(window.localStorage.getItem(this.getUserInfoName()));
  }

}
