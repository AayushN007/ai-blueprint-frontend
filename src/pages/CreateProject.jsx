import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function CreateProject() {
    const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-2">
          Create New AI Project
        </h1>

        <p className="text-gray-400 mb-10">
          Describe your project and let AI generate a complete ML blueprint.
        </p>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 max-w-4xl">

          {/* Project Name */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Project Name
            </label>

            <input
              type="text"
              placeholder="Student Performance Prediction"
              className="w-full bg-slate-800 rounded-lg p-4 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Domain */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Domain
            </label>

            <select className="w-full bg-slate-800 rounded-lg p-4 outline-none focus:ring-2 focus:ring-cyan-500">
              <option>Healthcare</option>
              <option>Finance</option>
              <option>Education</option>
              <option>Agriculture</option>
              <option>Retail</option>
              <option>Custom</option>
            </select>
          </div>

          {/* Problem Statement */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Problem Statement
            </label>

            <textarea
              rows="6"
              placeholder="Describe your AI/ML problem..."
              className="w-full bg-slate-800 rounded-lg p-4 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            <button
  onClick={() => navigate("/chat")}
  className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold transition"
>
  Generate Blueprint
</button>

            <button className="border border-slate-700 hover:bg-slate-800 px-8 py-3 rounded-lg transition">
              Save Draft
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CreateProject;