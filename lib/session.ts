import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function getSession() {
  const headersList = await headers();

  const headerObject = Object.fromEntries(headersList.entries());

  return auth.api.getSession({
    headers: headerObject,
  });
}

export async function logout() {
  const headersList = await headers();

  const headerObject = Object.fromEntries(headersList.entries());

  return auth.api.signOut({
    headers: headerObject,
  });
}