import { Wg } from "@/models/wg.ts";

export type Item = {
  id: number;
  name: string;
  position: number;
  isBought: boolean;
  isFavorite: boolean;
  isDeleted: boolean;
  wg: Wg;
};
