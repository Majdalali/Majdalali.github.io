import firebase_app from "../clientApp";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signOutUser() {
  try {
    await signOut(auth);
  } catch (e) {
    console.error(e);
  }
}
