import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FolderKanban,
  Database,
  Brain,
  FlaskConical,
  CircleCheck,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import { getProjects } from "../services/api";
import Spinner from "../components/Spinner";
import ErrorState from "../components/ErrorState";

function Dashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");

  const agents = [
    "Dataset Discovery Agent",
    "Model Recommendation Agent",
    "Experiment Planner",
    "Responsible AI Checker",
  ];

  async function load() {
    setStatus("loading");
    try {
      const data = await getProjects();
      const list = Array.isArray(data) ? data : data.projects || [];
      setProjects(list);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  useEffect(() => {
    load();
  }, []);

  const stats = [
    { title: "Projects", value: projects.length, icon: FolderKanban },
    { title: "Datasets", value: projects.length ? projects.length * 2 : 0, icon: Database },
    { title: "Models", value: projects.length ? Math.ceil(projects.length * 1.5) : 0, icon: Brain },
    { title: "Experiments", value: projects.length * 3, icon: FlaskConical },
  ];

  const recentProjects = projects.slice(0, 5);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 px-6 py-8 lg:px-8">
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold lg:text-4xl">Dashboard</h1>
            <p className="mt-2 text-gray-400">Monitor your AI project workflow</p>
          </div>
          <button
            onClick={() => navigate("/create-project")}
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            <Plus size={18} />
            New Project
          </button>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                whileHover={{ y: -5 }}
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <Icon className="text-cyan-400" />
                <p className="mt-5 text-gray-400">{item.title}</p>
                <h2 className="mt-2 text-4xl font-bold">{item.value}</h2>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-5 text-2xl font-bold">Recent Projects</h2>

            {status === "loading" && (
              <div className="flex items-center justify-center py-16 text-cyan-400">
                <Spinner size={28} />
              </div>
            )}

            {status === "error" && (
              <ErrorState
                title="Couldn't load projects"
                description="Please try again."
                onRetry={load}
              />
            )}

            {status === "success" && recentProjects.length === 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-gray-400">
                No projects yet. Create one to get started.
              </div>
            )}

            {status === "success" && recentProjects.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/5">
                {recentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="border-b border-white/10 p-5 transition last:border-none hover:bg-white/5"
                  >
                    <h3 className="font-semibold">{project.project}</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {project.model || "Model pending"}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="mb-5 text-2xl font-bold">AI Agents</h2>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-5">
                {agents.map((agent) => (
                  <div key={agent} className="flex items-center justify-between">
                    <span className="text-sm">{agent}</span>
                    <CircleCheck size={20} className="text-green-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
