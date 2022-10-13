import React from "react"
import Image from "next/image"

function ComingSoon() {
  return (
    <section className="h-full">
      <div className="flex h-full w-full items-center justify-center container mx-auto px-8 flex-row">
        <div className="h-full max-w-2xl text-center">
          <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">
            Coming Soon...
          </h1>

          <div className="h-full w-full items-center justify-center align-middle mt-12">
            <Image
              src={"/img/gonthumbs.gif"}
              height={500}
              width={500}
              alt="coming soon"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon
