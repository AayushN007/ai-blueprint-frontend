import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Download, FileText } from "lucide-react";
import { getBlueprint } from "../services/api";
import Spinner from "../components/Spinner";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import { useToast } from "../components/Toast";

function DownloadCenter() {
  const [blueprint, setBlueprint] = useState(null);
  const [status, setStatus] = useState("loading");
  const toast = useToast();

  async function load() {
    setStatus("loading");
    try {
      const data = await getBlueprint();
      setBlueprint(data);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  useEffect(() => {
    load();
  }, []);

  function downloadJSON() {
    const blob = new Blob([JSON.stringify(blueprint, null, 2)], {
      type: "application/json",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai_blueprint.json";
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success("Blueprint downloaded.");
  }

  const fields = blueprint
    ? [
        { label: "Project", value: blueprint.project },
        { label: "Dataset", value: blueprint.dataset },
        { label: "Target", value: blueprint.target },
        { label: "Model", value: blueprint.model },
      ].filter((f) => f.value)
    : [];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 px-6 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold lg:text-4xl">Download Center</h1>
          <p className="mt-2 text-gray-400">
            Export your generated blueprint and project resources.
          </p>
        </div>

        {status === "loading" && (
          <div className="flex items-center justify-center py-32 text-cyan-400">
            <Spinner size={32} />
          </div>
        )}

        {status === "error" && (
          <ErrorState
            title="Couldn't load blueprint"
            description="The download service is unavailable. Please try again."
            onRetry={load}
          />
        )}

        {status === "success" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-5 flex items-center gap-2 text-lg font-semibold">
                <FileText className="text-cyan-400" size={22} />
                Blueprint Summary
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {fields.map((f) => (
                  <div key={f.label} className="rounded-xl bg-slate-900/50 p-4">
                    <p className="text-sm text-gray-400">{f.label}</p>
                    <p className="mt-1 font-medium">{f.value || "—"}</p>
                  </div>
                ))}
              </div>
              {blueprint.pipeline?.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 text-sm text-gray-400">ML Pipeline</p>
                  <div className="space-y-2">
                    {blueprint.pipeline.map((step, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-300">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-xs text-cyan-400">
                          {i + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={downloadJSON}
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                <Download size={20} />
                Download Blueprint JSON
              </button>
            </div>

            <details className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <summary className="cursor-pointer text-sm font-medium text-gray-300 hover:text-white">
                View raw JSON
              </summary>
              <pre className="mt-4 overflow-auto rounded-xl bg-slate-900 p-4 text-sm text-gray-300">
                {JSON.stringify(blueprint, null, 2)}
              </pre>
            </details>
          </div>
        )}
      </main>
    </div>
  );
}

export default DownloadCenter;
