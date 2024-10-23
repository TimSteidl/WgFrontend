import { Wg } from "@/models/wg.ts";
import { Task } from "@/models/task.ts";

export type Profile = {
  id: number;
  wg: Wg;
  tasks: Task[];
  googleId: string;
  name: string;
  email: string;
  picture: string;
  givenName: string;
  familyName: string;
};
