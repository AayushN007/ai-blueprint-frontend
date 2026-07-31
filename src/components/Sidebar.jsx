import {
  LayoutDashboard,
  FolderPlus,
  Database,
  Brain,
  FileText,
  Download,
  Sparkles,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Create Project", icon: FolderPlus, path: "/create-project" },
    { name: "Datasets", icon: Database, path: "/datasets" },
    { name: "Models", icon: Brain, path: "/models" },
    { name: "Blueprint", icon: FileText, path: "/blueprint" },
    { name: "Downloads", icon: Download, path: "/download" },
  ];

  return (
    <aside className="hidden md:block w-72 min-h-screen bg-slate-950 border-r border-white/10 text-white">

      <div className="p-8">
        <div className="flex items-center gap-2">
          <Sparkles className="text-cyan-400" />
          <h1 className="text-2xl font-bold">
            AI <span className="text-cyan-400">Blueprint</span>
          </h1>
        </div>

        <p className="text-gray-400 mt-3 text-sm">
          AI/ML Project Assistant
        </p>
      </div>

      <nav className="mt-6 space-y-2 px-4">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-5 py-3 transition ${
                  isActive
                    ? "bg-cyan-500 text-black font-semibold"
                    : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

    </aside>
  );
}

export default Sidebar;