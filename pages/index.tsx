import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout title="Jacob Wright">
      <div className="h-full w-full flex flex-row justify-between">
        <div className="h-full w-1/2 bg-gray-400">comp 1</div>
        <div>comp 2 (threejs comp?)</div>
      </div>
    </Layout>
  );
};
export default Home;
