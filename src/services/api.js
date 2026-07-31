const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}


export function createProject(data) {
  return request("/projects", {
    method: "POST",
    body: JSON.stringify(data),
  });
}


export function getDatasets(data) {
  return request("/datasets/recommend", {
    method: "POST",
    body: JSON.stringify(data),
  });
}


export function getModels(data) {
  return request("/models/recommend", {
    method: "POST",
    body: JSON.stringify(data),
  });
}


export function generateBlueprint(data) {
  return request("/blueprint/generate", {
    method: "POST",
    body: JSON.stringify(data),
  });
}