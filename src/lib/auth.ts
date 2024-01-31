"use server";
import { cookies } from "next/headers";
import { pb } from "./pb";
import { revalidatePath } from "next/cache";

export async function getServerSession() {
  const cookieStore = cookies();
  if (!cookieStore) return null;
  const cookie = cookieStore.get("pb_auth");
  if (!cookie) return null;
  pb.authStore.loadFromCookie(`${cookie.name}=${cookie.value}`);
  if (!pb.authStore.isValid) return null;
  const userId = pb.authStore.model?.id;
  if (!userId) return null;
  const user = await pb.collection("users").getOne(userId);
  return user;
}

export async function logout() {
  cookies().delete("pb_auth");
  revalidatePath("/login");
}

export async function login() {
  revalidatePath("/login");
}

export async function updPage() {
  revalidatePath("page");
}
