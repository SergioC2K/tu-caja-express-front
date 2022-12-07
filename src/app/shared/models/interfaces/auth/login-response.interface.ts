export interface ILoginResponse {
  status: number;
  message: string;
  data: Data;
}

export interface Data {
  id: number;
  token: string;
  email: string;
  roles: string[];
}
