export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-zinc-100 py-14 sm:py-16" aria-labelledby="about-title">
      <h2 id="about-title" className="text-lg font-semibold text-zinc-900">
        About
      </h2>
      <div className="mt-4 max-w-2xl space-y-4 text-base leading-7 text-zinc-600">
        <p>
          I&apos;m a builder and founder based in San Francisco. Right now I&apos;m working on{" "}
          <a href="https://castari.com" target="_blank" rel="noreferrer" className="text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-900">
            Castari
          </a>{" "}
          — hosting infrastructure for AI agents.
        </p>
        <p>
          Before that I built and shipped AI products at RunPod, co-founded a
          couple startups, and made an AI beauty app that got to a couple million
          users.
        </p>
      </div>
    </section>
  );
}
