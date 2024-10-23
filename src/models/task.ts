import { Wg } from "@/models/wg.ts";
import { Profile } from "@/models/profile.ts";

export type Task = {
  id: number;
  wg: Wg;
  description: string;
  days: Date[];
  color: string;
  profile: Profile;
};

export type TaskStatus = "BACKLOG" | "IN_PROGRESS" | "DONE" | "TODO";
