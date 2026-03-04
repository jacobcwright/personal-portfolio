import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl px-6 sm:px-8">
        <Hero />
        <About />
        <Work />
        <Blog posts={posts} />
        <Contact />
      </main>
      <footer className="mx-auto w-full max-w-3xl px-6 sm:px-8">
        <Footer />
      </footer>
    </>
  );
}
