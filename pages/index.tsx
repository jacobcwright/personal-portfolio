import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";

import * as THREE from "three";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: "#3B82F6",
          backgroundColor: "#293241",
          maxDistance: 25.0,
          spacing: 22.0,
          points: 10.0,
        })
      );
    }
    return () => {
      // if (vantaEffect) {
      //   vantaEffect.destroy();
      // }
    };
  }, [vantaEffect]);
  return (
    <html>
      <body ref={vantaRef} className="pb-0">
        <Layout title="Jacob Wright">
          <Hero />
        </Layout>
      </body>
      <About />
      <Projects />
      <Contact />
    </html>
  );
};
export default Home;
