const links = [
  { href: "mailto:jacob@castari.com", label: "jacob@castari.com" },
  { href: "https://github.com/jacobcwright", label: "GitHub" },
  { href: "https://x.com/jehovahscript", label: "X" },
  { href: "https://www.linkedin.com/in/jacob-c-wright/", label: "LinkedIn" },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-14 sm:py-16" aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-lg font-semibold text-zinc-900">
        Get in touch
      </h2>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-zinc-900"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
