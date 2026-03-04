const socials = [
  { href: "https://github.com/jacobcwright", label: "GitHub" },
  { href: "https://x.com/jehovahscript", label: "X" },
  { href: "https://www.linkedin.com/in/jacob-c-wright/", label: "LinkedIn" },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-b border-white/10 py-16 sm:py-20" aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-2xl font-semibold tracking-tight text-white">
        Get in touch
      </h2>
      <div className="mt-6 space-y-3 text-zinc-300">
        <p>
          <a href="mailto:jacob@castari.com" className="transition-colors duration-200 hover:text-white">
            jacob@castari.com
          </a>
        </p>
        <p>
          <a href="https://cal.com" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-white">
            cal.com
          </a>
        </p>
      </div>
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
