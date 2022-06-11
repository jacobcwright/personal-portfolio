import React from "react";
import "../styles/globals.scss";
import { useEffect } from "react";

/* eslint-disable react/prop-types */

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return <Component {...pageProps} />;
}
