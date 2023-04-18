import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import Nav from "../pages/components/Nav";
import Hero from "../pages/components/Hero";
import Footer from "../pages/components/Footer";

export default function Home() {
  return (
    <div className="max-w-max h-screen ">
      <Nav></Nav>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}
