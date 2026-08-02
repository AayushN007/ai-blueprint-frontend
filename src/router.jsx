import { createBrowserRouter } from "react-router-dom";

import ProjectHistory from "./pages/ProjectHistory";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import Chat from "./pages/Chat";
import Blueprint from "./pages/Blueprint";
import DatasetRecommendation from "./pages/DatasetRecommendation";
import ModelRecommendation from "./pages/ModelRecommendation";
import DownloadCenter from "./pages/DownloadCenter";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create-project",
    element: <CreateProject />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/blueprint",
    element: <Blueprint />,
  },
  {
    path: "/datasets",
    element: <DatasetRecommendation />,
  },
  {
    path: "/models",
    element: <ModelRecommendation />,
  },
  {
    path: "/download",
    element: <DownloadCenter />,
  },
  {
    path: "/history",
    element: <ProjectHistory />,
  },
]);

export default router;