import { User } from "./user.model";

export class LoginResponseModel {
  token: string;
  account: User;
}

