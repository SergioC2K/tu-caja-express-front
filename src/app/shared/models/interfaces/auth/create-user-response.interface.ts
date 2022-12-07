import {IObjectData} from '../object-data.interface';

export interface ICreateUserResponse {
  id: 0,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  roles: IObjectData [],
  locked: boolean,
  enabled: boolean
}

