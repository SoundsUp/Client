import { User } from "./user.model";

export class Conversation {
  id: number;
  email: string;
  displayName: string;
  description: string;
  timeStamp: string;
  avatar: string;
  isOnline?: boolean;
  isSelected?: boolean;
}
