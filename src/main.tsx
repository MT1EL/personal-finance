import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthenticatedRoutes from "./routes/authenticated/AuthenticatedRoutes.tsx";
import AuthenticationRoutes from "./routes/unauthenticated/AuthenticationRoutes.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "@/components/ui/provider";

const isAuthenticated = true;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        {isAuthenticated ? <AuthenticatedRoutes /> : <AuthenticationRoutes />}
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
