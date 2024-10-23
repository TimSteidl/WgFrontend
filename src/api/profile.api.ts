import axios from "axios";
import { Profile } from "@/models/profile.ts";
import { Task } from "@/models/task.ts";
import { Wg } from "@/models/wg.ts";
import { toast } from "@/hooks/use-toast.ts";

export const BASE_URL = "http://localhost:8080";

export async function getProfileById(id: string): Promise<Profile> {
  return await axios
    .get(`${BASE_URL}/profile/${id}`)
    .then((res) => res.data() as Profile)
    .catch((err) => {
      toast(err);
      return {} as Profile;
    });
}

export async function getWgForProfile(id: string): Promise<Wg> {
  return await axios
    .get(`${BASE_URL}/profile/${id}/wg`)
    .then((res) => res.data() as Wg)
    .catch((err) => {
      toast(err);
      return {} as Wg;
    });
}

export async function createProfile(
  id: string,
  profile: Profile,
): Promise<Profile> {
  return await axios
    .post(`${BASE_URL}/profile/new/${id}`, profile)
    .then((res) => res.data() as Profile)
    .catch((err) => {
      toast(err);
      return {} as Profile;
    });
}

export async function getTasksForProfile(id: string): Promise<Task[]> {
  return await axios
    .get(`${BASE_URL}/profile/${id}/tasks`)
    .then((res) => res.data() as Task[])
    .catch((err) => {
      toast(err);
      return [] as Task[];
    });
}

export async function addNewTaskToProfile(
  id: string,
  task: string,
): Promise<Task[]> {
  return await axios
    .post(`${BASE_URL}/profile/${id}/tasks`, task)
    .then((res) => res.data() as Task[])
    .catch((err) => {
      toast(err);
      return [] as Task[];
    });
}

export async function updateTaskInProfile(
  id: string,
  task: string,
): Promise<Task[]> {
  return await axios
    .put(`${BASE_URL}/profile/${id}/tasks`, task)
    .then((res) => res.data() as Task[])
    .catch((err) => {
      toast(err);
      return [] as Task[];
    });
}

export async function deleteTaskFromProfile(
  id: string,
  task: string,
): Promise<Task[]> {
  return await axios
    .delete(`${BASE_URL}/profile/${id}/tasks/${task}`)
    .then((res) => res.data() as Task[])
    .catch((err) => {
      toast(err);
      return [] as Task[];
    });
}
