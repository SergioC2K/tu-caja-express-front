export interface ICreateUserRequest {
  firstName: string,
  lastName: string,
  email: string,
  role?: string[],
  password: string
}

