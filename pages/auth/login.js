import { useState } from "react";
import signIn from "../../firebase/auth/signin";
import { useRouter } from 'next/navigation'
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button,
  Text,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter()

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      setError(error.message);
    } else {
      console.log(result);
      return router.push("/")

    }
  };

  return (
    <div className="w-screen bg-slate-900 h-screen flex justify-center items-center ">
      <div className="flex flex-col text-white">
        <form onSubmit={handleForm}>
          <FormControl>
            <Text fontSize="4xl">Sign In</Text>
            <FormLabel pt={5}>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormLabel pt={5}>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button mt={5} type="submit" colorScheme="teal" variant="outline">
              Login
            </Button>
            {error && (
              <Text pt={5} fontSize="xl">
                Entered Password or Email is wrong. Please try again! 
              </Text>
            )}
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default Login;

export const getServerSideProps = async () => ({
  redirect: {
    permanent: false,
    destination: "/Login",
  },
});