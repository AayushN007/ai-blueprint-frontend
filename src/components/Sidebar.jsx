import {
  LayoutDashboard,
  FolderPlus,
  Database,
  Brain,
  FileText,
  Download,
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
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800">

      <div className="p-8">
        <h1 className="text-3xl font-bold text-cyan-400">
          AI Blueprint
        </h1>

        <p className="text-gray-400 mt-2">
          AI/ML Project Assistant
        </p>
      </div>

      <nav className="mt-8">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-4 transition ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "text-gray-300 hover:bg-slate-800 hover:text-cyan-400"
                }`
              }
            >
              <Icon size={22} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

      </nav>
    </aside>
  );
}

export default Sidebar;