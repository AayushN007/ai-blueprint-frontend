import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Download } from "lucide-react";
import { getBlueprint } from "../services/api";

function DownloadCenter() {
  const [blueprint, setBlueprint] = useState(null);

  useEffect(() => {
    async function loadBlueprint() {
      try {
        const data = await getBlueprint();
        setBlueprint(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadBlueprint();
  }, []);

  function downloadJSON() {
    const blob = new Blob(
      [JSON.stringify(blueprint, null, 2)],
      { type: "application/json" }
    );

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ai_blueprint.json";
    a.click();

    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Download Center
        </h1>

        {!blueprint ? (
          <p>Loading...</p>
        ) : (
          <>
            <pre className="rounded-xl bg-white/5 border border-white/10 p-6 overflow-auto">
              {JSON.stringify(blueprint, null, 2)}
            </pre>

            <button
              onClick={downloadJSON}
              className="mt-6 flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
            >
              <Download size={20} />
              Download Blueprint JSON
            </button>
          </>
        )}
      </main>
    </div>
  );
}

export default DownloadCenter;
