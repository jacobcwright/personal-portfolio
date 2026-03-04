import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
