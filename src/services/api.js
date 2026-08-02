const API_URL = "http://127.0.0.1:8000";

export async function chat(message) {
  return fetch(`${API_URL}/chat/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  }).then(r => r.json());
}

export async function createProject(data) {
  return fetch(`${API_URL}/projects/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(r => r.json());
}

export async function getProjects() {
  return fetch(`${API_URL}/projects/`).then(r => r.json());
}

export async function getDatasets() {
  return fetch(`${API_URL}/datasets/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  }).then(r => r.json());
}

export async function getModels() {
  return fetch(`${API_URL}/models/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  }).then(r => r.json());
}

export async function getBlueprint() {
  return fetch(`${API_URL}/download/`).then(r => r.json());
}
