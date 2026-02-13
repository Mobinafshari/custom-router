import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider } from "../router/router.tsx";
import Home from "./components/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ height: "100vh" }}>
      <RouterProvider router={[{ element: <Home />, path: "" }]}>
        <App />
      </RouterProvider>
    </div>
  </StrictMode>,
);
