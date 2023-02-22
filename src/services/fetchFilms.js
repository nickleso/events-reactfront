import axios from "axios";

axios.defaults.baseURL = "https://users-events.up.railway.app/api";

export async function fetchUsers(page = 1, limit = 5) {
  const url = `?page=${page}&limit=${limit}`;

  const { data } = await axios.get(url);
  console.log(data);
  return data;
}

export async function addUser({ userId }) {
  const newUser = {};

  await axios.post(newUser);
}

export async function deleteUserFromDB(userId) {
  await axios.delete(userId);
}

export async function fetchEventsByUserId(userId, page = 1, limit = 5) {
  const url = `/${userId}/events?page=${page}&limit=${limit}`;

  const { data } = await axios.get(url);
  console.log("events", data);
  return data;
}
