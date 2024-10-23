import axios from "axios";
import { BASE_URL } from "@/api/profile.api.ts";
import { Wg } from "@/models/wg.ts";
import { toast } from "@/hooks/use-toast.ts";

export async function getWgById(id: number): Promise<Wg> {
  return await axios
    .get(BASE_URL + `/wg/${id}`)
    .then((res) => res.data as Wg)
    .catch((err) => {
      toast(err);
      return {} as Wg;
    });
}
