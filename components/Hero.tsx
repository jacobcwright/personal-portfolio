const socials = [
  { href: "https://github.com/jacobcwright", label: "GitHub" },
  { href: "https://x.com/jehovahscript", label: "X (@jehovahscript)" },
  { href: "https://www.linkedin.com/in/jacob-c-wright/", label: "LinkedIn" },
];

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-24 border-b border-white/10 py-20 sm:py-28">
      <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Jacob Wright</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
        Founder &amp; builder. Currently building Castari (YC).
      </p>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
        {socials.map((social) => (
          <li key={social.href}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-white"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
