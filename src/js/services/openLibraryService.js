import axios from "axios";

const BASE_URL = "https://openlibrary.org";

export async function fetchBooksBySubject(subject) {
  const clean = subject.toLowerCase().replaceAll(" ", "_");

  const res = await axios.get(`${BASE_URL}/subjects/${clean}.json?limit=20`);

  return res.data;
}

export async function fetchBookDetails(key) {
  const res = await axios.get(`${BASE_URL}${key}.json`);
  return res.data;
}