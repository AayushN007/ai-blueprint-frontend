import { useState } from "react";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <Sparkles className="text-cyan-400" />
          <span>
            AI <span className="text-cyan-400">Blueprint</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#features" className="transition hover:text-cyan-400">
            Features
          </a>
          <a href="#workflow" className="transition hover:text-cyan-400">
            Workflow
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/create-project"
            className="hidden sm:inline-block rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-cyan-400"
          >
            Get Started
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-gray-300 hover:bg-slate-800 md:hidden"
            aria-label="Open navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-[72px] bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-0 right-0 border-b border-white/10 bg-slate-950 p-6 md:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute right-6 top-6 rounded-lg p-2 text-gray-400 hover:bg-slate-800"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
              <div className="flex flex-col gap-4">
                <a href="#features" onClick={() => setMobileOpen(false)} className="text-lg text-gray-300 hover:text-cyan-400">
                  Features
                </a>
                <a href="#workflow" onClick={() => setMobileOpen(false)} className="text-lg text-gray-300 hover:text-cyan-400">
                  Workflow
                </a>
                <Link
                  to="/create-project"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
