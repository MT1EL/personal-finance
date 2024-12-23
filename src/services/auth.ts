import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebase";

const auth = getAuth(app);

export const registerUser = async (credentials: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    // Step 1: Create a user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    const user = userCredential.user;

    // Step 3: Update profile (set display name)
    await updateProfile(user, { displayName: credentials.name });

    // Optional: Log result (for debugging)
    console.log("User signed in and registered successfully:", user);

    return user;
  } catch (error) {
    // Handle errors properly (both registration and sign-in issues)
    console.error("Error occurred during registration or login:", error);
    throw error;
  }
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    const user = userCredential.user;

    console.log("User signed in successfully:", user);
    return user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};
