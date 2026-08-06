const API_URL = "https://ai-blueprint-backend-v3x5.onrender.com";

async function handleResponse(res) {
  if (!res.ok) {
    const message = `Request failed (${res.status})`;
    throw new Error(message);
  }
  return res.json();
}

export async function chat(message) {
  return fetch(`${API_URL}/chat/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  }).then(handleResponse);
}

export async function createProject(data) {
  return fetch(`${API_URL}/projects/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(handleResponse);
}

export async function getProjects() {
  return fetch(`${API_URL}/projects/`).then(handleResponse);
}

export async function deleteProject(id) {
  return fetch(`${API_URL}/projects/${id}`, {
    method: "DELETE",
  }).then(handleResponse);
}

export async function getDatasets() {
  return fetch(`${API_URL}/datasets/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  }).then(handleResponse);
}

export async function getModels() {
  return fetch(`${API_URL}/models/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  }).then(handleResponse);
}

export async function getBlueprint() {
  return fetch(`${API_URL}/download/`).then(handleResponse);
}

export async function generateBlueprint(payload) {
  return fetch(`${API_URL}/blueprint/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then(handleResponse);
}

export { API_URL };
