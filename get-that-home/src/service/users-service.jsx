import apiFetch from "./api-fetch";
import { tokenKey } from "../config";

export async function createUser(credentials) {
  const { token, ...user } = await apiFetch("/users", { body: credentials });

  sessionStorage.setItem(tokenKey, token);

  console.log(user);

  return user;
}

export async function getUser() {
  const { token, ...user } = await apiFetch("/profile");

  // console.log(user);
  return user;
}

export async function updateUser(
  body = {
    name: "New Name",
    phone: "2235652301",
    address: "Francia",
  }
) {
  const { token, ...user } = await apiFetch("/profile", {
    body,
    method: "PATCH",
  });
  console.log(user);

  return user;
}
