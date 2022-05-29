import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout title="Jacob Wright">
      <div className="h-full w-full flex flex-row justify-between bg-black text-red-600">
        <div className="h-full w-1/2 bg-black">comp 1</div>
        <div>comp 2 (threejs comp?)</div>
      </div>
    </Layout>
  );
};
export default Home;
