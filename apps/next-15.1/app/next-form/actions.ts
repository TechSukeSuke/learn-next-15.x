"use server";

import { redirect } from "next/navigation";

export async function searchAction(formData: FormData) {
  const name = formData.get("name")?.toString();
  if (!name || !/^[a-z]+$/.test(name)) {
    return { error: "Name is required" };
  }
  return redirect("/next-form/search");
}
