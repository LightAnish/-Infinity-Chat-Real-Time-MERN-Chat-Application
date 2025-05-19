import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/App.router.jsx";
import { ThemeProvider } from "./contexts/Theme.context.jsx";
import { AuthProvider } from "./contexts/Auth.context.jsx";
import { SocketProvider } from "./contexts/Socket.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <SocketProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </SocketProvider>
    </AuthProvider>
  </StrictMode>
);
