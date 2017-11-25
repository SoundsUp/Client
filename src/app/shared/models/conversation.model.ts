import { User } from "./user.model";

export class Conversation {
  id: number;
  user: User;
  isOnline: boolean;
  isSelected?: boolean;
}
