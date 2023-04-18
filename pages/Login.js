import { useRouter } from "next/router";
import Login from "../pages/auth/login";

export default function LoginPage() {
  const router = useRouter();
  return <Login router={router} />;
}