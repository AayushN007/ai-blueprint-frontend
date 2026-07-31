function Navbar() {
  return (
    <nav className="w-full bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-cyan-400">
          AI Blueprint
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-cyan-400 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-cyan-400 cursor-pointer transition">
            Features
          </li>
          <li className="hover:text-cyan-400 cursor-pointer transition">
            About
          </li>
        </ul>

        {/* Get Started Button */}
        <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;