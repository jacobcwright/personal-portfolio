const socials = [
  { href: "https://github.com/jacobcwright", label: "GitHub" },
  { href: "https://x.com/jehovahscript", label: "X" },
  { href: "https://www.linkedin.com/in/jacob-c-wright/", label: "LinkedIn" },
];

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-24 border-b border-zinc-100 py-20 sm:py-28">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        Jacob Wright
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-500">
        I like building things.
      </p>
      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
        {socials.map((social) => (
          <li key={social.href}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-zinc-900"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
