/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Link from "next/link"

export default function TokenizdShowcase() {
  return (
    <div className="w-full h-full">
      <Link href="https://tokenizd.vercel.app/" passHref>
        <h1 className="w-full text-6xl text-blue-500 flex justify-center hover:text-blue-300 hover:scale-110 ease-in-out transition-all hover:cursor-pointer underline">
          Tokenizd
        </h1>
      </Link>
      <div className="flex h-full sm:p-10 items-start pt-5 flex-col sm:flex-row justify-evenly">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-3xl font-medium text-blue-300">
            Tokenizd Web App
          </h1>
          <p className="text-xl my-3">
            Agency to help creators and brands tokenize their products and
            distribute NFTs.
          </p>
          <p className="text-xl my-3">
            Built and launched MVP in 3 days and signed first paying customer 2
            days later
          </p>
          <h1 className="text-3xl font-medium text-blue-300 mt-6">
            Coming soon...
          </h1>
          <h2 className="text-xl my-3">
            <u>Tokenizd Shopify App:</u> Tokenizd will integrate directly with
            your shopify store to allow ease of tokenization of your products
            and distribution of your NFTs to customers.
          </h2>
        </div>
      </div>
    </div>
  )
}
