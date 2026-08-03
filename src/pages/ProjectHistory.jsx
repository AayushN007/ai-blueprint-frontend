import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FolderOpen, Trash2 } from "lucide-react";

function ProjectHistory() {
  const [projects, setProjects] = useState([]);

  async function loadProjects() {
    const res = await fetch("https://ai-blueprint-backend-v3x5.onrender.com/projects/");
    const data = await res.json();
    setProjects(data);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function deleteProject(id) {
    await fetch(`http://127.0.0.1:8000/projects/${id}`, {
      method: "DELETE",
    });
    loadProjects();
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="mb-8 flex items-center gap-3 text-4xl font-bold">
          <FolderOpen className="text-cyan-400" />
          Project History
        </h1>

        <div className="space-y-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-xl font-bold">{project.project}</h2>

              <p className="mt-3">Dataset: {project.dataset}</p>
              <p>Target: {project.target}</p>
              <p className="text-cyan-400">Model: {project.model}</p>

              <button
                onClick={() => deleteProject(project.id)}
                className="mt-5 flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProjectHistory;
