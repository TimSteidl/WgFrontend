import { Task } from "@/models/task.ts";
import { Profile } from "@/models/profile.ts";
import { Item } from "@/models/item.ts";

export type Wg = {
  id: number;
  profiles: Profile[];
  items: Item[];
  tasks: Task[];
  wgPassword: string;
  wgPasswordIsOTP: boolean;
};
