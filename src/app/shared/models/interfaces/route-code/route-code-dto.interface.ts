import { IRoutesDto } from "../routes";

export interface IRouteCodeDto {
  id: number;
  routeId: IRoutesDto;
  zipCode: string;
}
