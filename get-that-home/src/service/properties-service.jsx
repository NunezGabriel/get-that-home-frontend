import { dataKey } from "../config";

import apiFetch from "./api-fetch";

export async function getProperties() {
  const data = await apiFetch("/properties");
  localStorage.setItem(dataKey, JSON.stringify(data));

  console.log(data);
  return data;
}

export async function showProperty(id) {
  const data = await apiFetch(`/properties/${id}`);

  console.log(data);
  return data;
}

export async function createProperty(body) {
  const data = await apiFetch("/properties", { body });
  console.log(data);

  return data;
}

export async function updateProperty(id, body) {
  const data = await apiFetch(`/properties/${id}`, { method: "PATCH", body });

  console.log(await data);
}

export async function deleteProperty(id) {
  const data = await apiFetch(`/properties/${id}`, { method: "DELETE" });

  console.log(data);

  return data;
}
