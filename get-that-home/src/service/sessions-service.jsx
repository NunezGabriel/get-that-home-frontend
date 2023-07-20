import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function login(credentials) {
  const { token, ...user } = await apiFetch("/login", {
    body: credentials,
  });

  sessionStorage.setItem(tokenKey, token);

  // console.log(user);

  return user;
}

export async function logout() {
  const data = await apiFetch("/logout", { method: "DELETE" });
  sessionStorage.removeItem(tokenKey);

  console.log(data);

  return data;
}
