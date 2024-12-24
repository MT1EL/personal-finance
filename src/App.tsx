import { useEffect, useState } from "react";
import AuthenticatedRoutes from "./routes/authenticated/AuthenticatedRoutes";
import AuthenticationRoutes from "./routes/unauthenticated/AuthenticationRoutes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Text } from "@chakra-ui/react";
function App() {
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(
    auth.currentUser !== null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This listens for any change in auth state (sign in or sign out)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // The user is logged in
      } else {
        setIsAuthenticated(false); // The user is logged out
      }
      setLoading(false);
      console.log("User state changed. Current user is:", user);
    });

    // Cleanup listener when component unmounts

    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    // While checking the auth state, render loading state
    return (
      <Text textAlign={"center"} textStyle={"text1"} color="grey.900">
        Loading...
      </Text>
    );
  }

  return isAuthenticated ? <AuthenticatedRoutes /> : <AuthenticationRoutes />;
}

export default App;
