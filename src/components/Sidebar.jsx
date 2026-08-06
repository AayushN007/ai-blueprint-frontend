import { useState } from "react";
import {
  LayoutDashboard,
  FolderPlus,
  Database,
  Brain,
  FileText,
  Download,
  FolderOpen,
  Sparkles,
  X,
} from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
  { name: "Project History", icon: FolderOpen, path: "/history" },
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Create Project", icon: FolderPlus, path: "/create-project" },
  { name: "Datasets", icon: Database, path: "/datasets" },
  { name: "Models", icon: Brain, path: "/models" },
  { name: "Blueprint", icon: FileText, path: "/blueprint" },
  { name: "Downloads", icon: Download, path: "/download" },
];

function SidebarContent({ onNavigate }) {
  return (
    <>
      <Link to="/" className="block p-8" onClick={onNavigate}>
        <div className="flex items-center gap-2 text-3xl font-bold">
          <Sparkles className="text-cyan-400" />
          <span>
            AI <span className="text-cyan-400">Blueprint</span>
          </span>
        </div>
        <p className="mt-2 text-gray-400">AI/ML Project Assistant</p>
      </Link>

      <nav className="mt-4">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={onNavigate}
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-4 transition ${
                  isActive
                    ? "bg-cyan-500 text-black"
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
    </>
  );
}

function MobileTopBar({ onOpen }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-5 py-4 lg:hidden">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold">
        <Sparkles className="text-cyan-400" />
        <span>
          AI <span className="text-cyan-400">Blueprint</span>
        </span>
      </Link>
      <button
        onClick={onOpen}
        className="rounded-lg p-2 text-gray-300 hover:bg-slate-800"
        aria-label="Open navigation menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </div>
  );
}

function Sidebar({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-72 shrink-0 bg-slate-900 border-r border-slate-800 lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <MobileTopBar onOpen={() => setMobileOpen(true)} />

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
              className="fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-slate-900 lg:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute right-4 top-5 rounded-lg p-2 text-gray-400 hover:bg-slate-800"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
              <SidebarContent onNavigate={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}

export default Sidebar;
