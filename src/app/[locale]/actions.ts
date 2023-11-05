"use server";

import { revalidatePath } from "next/cache";

const BASE_URL = "http://localhost:8080";

export async function onAdd(data: FormData) {
  const text = data.get("text");
  if (!text) {
    return;
  }
  const body = JSON.stringify({ text });
  await fetch(`${BASE_URL}/items`, {
    headers: { "Content-Type": "application/json" },
    method: "post",
    body,
    cache: "no-cache",
  });
  revalidatePath("/");
}

export async function onDelete(id: number) {
  await fetch(`${BASE_URL}/items/${id}`, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    cache: "no-cache",
  });
  revalidatePath("/");
}

export async function getItems() {
  return (await fetch(`${BASE_URL}/items`, { cache: "no-cache" })).json();
}
