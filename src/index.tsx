import { ThemeProvider } from "@/features/theme";
import { RouterProvider } from "@/router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  </StrictMode>
);
