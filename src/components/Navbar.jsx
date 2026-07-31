import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl text-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <Sparkles className="text-cyan-400" />

          <span>
            AI <span className="text-cyan-400">Blueprint</span>
          </span>
        </Link>


        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-gray-300">

          <a
            href="#features"
            className="transition hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#workflow"
            className="transition hover:text-cyan-400"
          >
            Workflow
          </a>

        </div>


        {/* Get Started */}
        <Link
          to="/create-project"
          className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-cyan-400"
        >
          Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;