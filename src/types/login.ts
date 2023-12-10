import { IUser } from "./user";

export interface ILogin {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}
  