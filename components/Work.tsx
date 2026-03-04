type WorkItem = {
  name: string;
  description: string;
  role: string;
  href?: string;
};

const workItems: WorkItem[] = [
  {
    name: "Castari",
    description: "Hosting infrastructure for AI agents. YC W25.",
    role: "Founder",
    href: "https://castari.com",
  },
  {
    name: "Open Animate",
    description: "Open-source creative suite for AI agents.",
    role: "Creator",
    href: "https://github.com/jacobcwright/open-animate",
  },
  {
    name: "Sister",
    description: "AI beauty assistant. 2M+ users.",
    role: "Founder",
    href: "https://trysister.com",
  },
  {
    name: "RunPod",
    description: "GPU cloud platform. Scaled to $100M+ revenue.",
    role: "Sr. Growth Engineer -> FDE Manager",
    href: "https://runpod.io",
  },
  {
    name: "Proxy",
    description: "Venture-backed startup. $1M annualized revenue year one.",
    role: "Co-Founder & CTO",
  },
  {
    name: "Life Help",
    description: "Mental health platform implemented nationwide by LDS Church.",
    role: "Co-Founder",
  },
];

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-white/10 py-16 sm:py-20" aria-labelledby="work-title">
      <h2 id="work-title" className="text-2xl font-semibold tracking-tight text-white">
        Work
      </h2>
      <ul className="mt-8 space-y-4">
        {workItems.map((item) => (
          <li
            key={item.name}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-200 hover:border-white/20"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">{item.name}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{item.description}</p>
              </div>
              <p className="text-sm font-medium text-zinc-400">{item.role}</p>
            </div>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                {item.href.replace("https://", "")}
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
