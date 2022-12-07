import { IUserResponse } from "./user-response.interface";

export interface ICreateUserResponse {
  status: number;
  message: string;
  data: IUserResponse;
}

