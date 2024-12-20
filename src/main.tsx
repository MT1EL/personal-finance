import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthenticatedRoutes from "./routes/authenticated/AuthenticatedRoutes.tsx";
import AuthenticationRoutes from "./routes/unauthenticated/AuthenticationRoutes.tsx";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme/theme.ts";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/styles.css";

const isAuthenticated = true;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {isAuthenticated ? <AuthenticatedRoutes /> : <AuthenticationRoutes />}
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
