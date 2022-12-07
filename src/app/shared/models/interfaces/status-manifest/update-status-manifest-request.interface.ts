export interface IUpdateStatusManifestRequest {
  statusManifestId: number;
  statusManifestName: string;
  status: boolean;
  user: string;
}
