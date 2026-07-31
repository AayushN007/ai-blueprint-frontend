import Sidebar from "../components/Sidebar";

function Dashboard() {
  const stats = [
    { title: "Projects", value: 5 },
    { title: "Datasets", value: 12 },
    { title: "Models", value: 8 },
    { title: "Experiments", value: 18 },
  ];

  const recentProjects = [
    "Student Performance Prediction",
    "House Price Prediction",
    "Customer Churn Prediction",
  ];

  const agents = [
    { name: "Dataset Discovery Agent", status: "Online" },
    { name: "Model Recommendation Agent", status: "Online" },
    { name: "Experiment Planner", status: "Online" },
    { name: "Responsible AI Checker", status: "Online" },
  ];

  return (
    <div className="flex bg-slate-950 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 min-h-screen">

        {/* Header */}
        <header className="border-b border-slate-800 px-8 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-cyan-400">
            AI Blueprint
          </h1>

          <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold transition">
            + New Project
          </button>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto p-8">

          <h2 className="text-4xl font-bold mb-8">
            Dashboard
          </h2>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {stats.map((item) => (
              <div
                key={item.title}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500 transition"
              >
                <h3 className="text-gray-400">
                  {item.title}
                </h3>

                <p className="text-4xl font-bold mt-3 text-cyan-400">
                  {item.value}
                </p>
              </div>
            ))}

          </div>

          {/* Bottom Section */}
          <div className="grid lg:grid-cols-3 gap-8 mt-12">

            {/* Recent Projects */}
            <div className="lg:col-span-2">

              <h2 className="text-2xl font-bold mb-5">
                Recent Projects
              </h2>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl">

                {recentProjects.map((project) => (
                  <div
                    key={project}
                    className="px-6 py-5 border-b border-slate-800 last:border-none hover:bg-slate-800 transition"
                  >
                    <h3 className="font-semibold text-lg">
                      {project}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Last updated 2 hours ago
                    </p>
                  </div>
                ))}

              </div>

            </div>

            {/* AI Agent Status */}
            <div>

              <h2 className="text-2xl font-bold mb-5">
                AI Agent Status
              </h2>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                {agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="flex justify-between items-center mb-5 last:mb-0"
                  >
                    <span>{agent.name}</span>

                    <span className="text-green-400 font-semibold">
                      ● {agent.status}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;