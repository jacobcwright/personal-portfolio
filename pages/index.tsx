import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <Layout title="Jacob Wright">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};
export default Home;
