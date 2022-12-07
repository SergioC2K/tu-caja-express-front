import { IObjectData } from "../object-data.interface";

export interface IUserResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: IObjectData[];
  locked: boolean;
  enabled: boolean;
}

