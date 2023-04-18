import { useRouter } from "next/router";
import Resume from "../pages/components/Resume";

export default function LoginPage() {
  const router = useRouter();
  return <Resume router={router} />;
}