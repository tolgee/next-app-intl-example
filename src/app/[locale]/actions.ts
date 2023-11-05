"use server";

import { revalidatePath } from "next/cache";

const BASE_URL = "http://localhost:8080";

export async function onAdd(data: FormData) {
  const body = JSON.stringify({ text: data.get("text") });
  await fetch(`${BASE_URL}/items`, {
    headers: { "Content-Type": "application/json" },
    method: "post",
    body,
    cache: "no-cache",
  });
  revalidatePath("/");
}

export async function onDelete(i: number) {
  await fetch(`${BASE_URL}/items/${i}`, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    cache: "no-cache",
  });
  revalidatePath("/");
}

export async function getItems() {
  return (await fetch(`${BASE_URL}/items`, { cache: "no-cache" })).json();
}
