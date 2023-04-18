"use client";
import React from "react";
import signUp from "../../firebase/auth/signup";
import { useRouter } from "next/navigation";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button,
  Text,
  Image,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    // const { result, error } = await signUp(email, password);

    if (error) {
      setError(error.message);
    } else {
      console.log(result);
      return router.push("/auth/login");
    }
  };
  return (
    <div className="wrapper w-screen bg-slate-900 h-screen flex justify-center items-center ">
      <div className="form-wrapper flex flex-col text-white">
        <div className="">
          {/* <form onSubmit={handleForm} className="form">
            <FormControl>
              <Text fontSize="4xl">Sign Up</Text>
              <FormLabel pt={5}>Email address</FormLabel>
              <Input
                required
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormLabel pt={5}>Password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <Button mt={5} type="submit" colorScheme="teal" variant="outline">
                Sign Up
              </Button>
              {error && (
                <Text pt={5} fontSize="xl">
                  Error occurred. Please try again!
                </Text>
              )}
            </FormControl>
          </form> */}

          <Box>
            <Image
              src="https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif"
              boxSize="full"
              alt="404 Image"
            />
          </Box>
          <Box color="black" pt={5}>
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>OOPS!</AlertTitle>
              <AlertDescription>
                Can&apos;t let you do that buddy. SORRY!
              </AlertDescription>
            </Alert>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Register;
