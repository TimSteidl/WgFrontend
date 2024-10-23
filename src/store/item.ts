import { Wg } from "@/models/wg.ts";
import { createStore } from "zustand";
import { getWgById } from "@/api/wg.api.ts";

type WgStore = {
  wg: Wg | undefined;
  fetchWg: (id: number) => void;
};

export const useWgStore = createStore<WgStore>((set) => ({
  wg: undefined,
  fetchWg: async (id) => {
    const wg = await getWgById(id);
    set({ wg });
  },
}));
