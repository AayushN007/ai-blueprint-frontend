import {
  FolderKanban,
  Database,
  Brain,
  FlaskConical,
  CircleCheck,
} from "lucide-react";

import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const stats = [
    {
      title: "Projects",
      value: 5,
      icon: FolderKanban,
    },
    {
      title: "Datasets",
      value: 12,
      icon: Database,
    },
    {
      title: "Models",
      value: 8,
      icon: Brain,
    },
    {
      title: "Experiments",
      value: 18,
      icon: FlaskConical,
    },
  ];

  const projects = [
    "Student Performance Prediction",
    "House Price Prediction",
    "Customer Churn Prediction",
  ];

  const agents = [
    "Dataset Discovery Agent",
    "Model Recommendation Agent",
    "Experiment Planner",
    "Responsible AI Checker",
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Monitor your AI project workflow
            </p>
          </div>

          <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400">
            + New Project
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

                <p className="mt-5 text-gray-400">
                  {item.title}
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  {item.value}
                </h2>

              </motion.div>
            );
          })}

        </div>


        <div className="grid lg:grid-cols-3 gap-8 mt-12">

          <div className="lg:col-span-2">

            <h2 className="text-2xl font-bold mb-5">
              Recent Projects
            </h2>

            <div className="rounded-2xl border border-white/10 bg-white/5">

              {projects.map((project) => (
                <div
                  key={project}
                  className="p-5 border-b border-white/10 last:border-none hover:bg-white/5 transition"
                >
                  <h3 className="font-semibold">
                    {project}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Updated recently
                  </p>
                </div>
              ))}

            </div>

          </div>


          <div>

            <h2 className="text-2xl font-bold mb-5">
              AI Agents
            </h2>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-5">

              {agents.map((agent) => (
                <div
                  key={agent}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm">
                    {agent}
                  </span>

                  <CircleCheck
                    size={20}
                    className="text-green-400"
                  />
                </div>
              ))}

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;