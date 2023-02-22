import axios from "axios";

axios.defaults.baseURL = "https://users-events.up.railway.app/api";

export async function fetchUsers(page = 1, limit = 5) {
  const url = `?page=${page}&limit=${limit}`;

  const { data } = await axios.get(url);
  return data;
}

export async function addUserToDB({ firstName, lastName, email, phoneNumber }) {
  const newUser = { firstName, lastName, email, phoneNumber };

  const user = await axios.post("/", newUser);
  return user.data;
}

export async function deleteUserFromDB(userId) {
  await axios.delete(userId);
}

export async function fetchEventsByUserId(userId, page = 1, limit = 5) {
  const url = `/${userId}/events?page=${page}&limit=${limit}`;

  const { data } = await axios.get(url);
  return data;
}

export async function addEventToDB(
  { title, description, startDate, endDate },
  userId
) {
  const url = `/${userId}/events`;
  const newEvent = { title, description, startDate, endDate };

  const event = await axios.post(url, newEvent);
  return event.data;
}

export async function deleteEventFromDB(eventId, userId) {
  const url = `/${userId}/events/${eventId}`;
  await axios.delete(url);
}
