import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FolderOpen, Trash2 } from "lucide-react";
import { getProjects, deleteProject } from "../services/api";
import Spinner from "../components/Spinner";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import { useToast } from "../components/Toast";

function ProjectHistory() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");
  const [deletingId, setDeletingId] = useState(null);
  const toast = useToast();

  async function loadProjects() {
    setStatus("loading");
    try {
      const data = await getProjects();
      setProjects(Array.isArray(data) ? data : data.projects || []);
      setStatus(projects.length ? "success" : "empty");
    } catch (err) {
      setStatus("error");
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Delete this project? This cannot be undone.")) return;
    setDeletingId(id);
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p.id !== id));
      toast.success("Project deleted.");
    } catch (err) {
      toast.error("Couldn't delete project.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 px-6 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="flex items-center gap-3 text-3xl font-bold lg:text-4xl">
            <FolderOpen className="text-cyan-400" />
            Project History
          </h1>
          <p className="mt-2 text-gray-400">All your saved AI projects.</p>
        </div>

        {status === "loading" && (
          <div className="flex items-center justify-center py-32 text-cyan-400">
            <Spinner size={32} />
          </div>
        )}

        {status === "error" && (
          <ErrorState
            title="Couldn't load projects"
            description="The project service is unavailable. Please try again."
            onRetry={loadProjects}
          />
        )}

        {status === "empty" && (
          <EmptyState
            icon={FolderOpen}
            title="No projects yet"
            description="Create your first AI project to see it here."
          />
        )}

        {status === "success" && (
          <div className="space-y-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/20"
              >
                <h2 className="text-xl font-bold">{project.project}</h2>
                <div className="mt-3 space-y-1 text-gray-300">
                  <p>Dataset: {project.dataset}</p>
                  <p>Target: {project.target}</p>
                  <p className="text-cyan-400">Model: {project.model}</p>
                </div>
                <button
                  onClick={() => handleDelete(project.id)}
                  disabled={deletingId === project.id}
                  className="mt-5 flex items-center gap-2 rounded-xl bg-red-500/90 px-4 py-2 text-sm font-medium hover:bg-red-500 disabled:opacity-50"
                >
                  {deletingId === project.id ? (
                    <Spinner size={16} />
                  ) : (
                    <Trash2 size={16} />
                  )}
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default ProjectHistory;
