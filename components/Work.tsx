type WorkItem = {
  name: string;
  description: string;
  href?: string;
};

const workItems: WorkItem[] = [
  {
    name: "Castari",
    description: "Hosting infrastructure for AI agents. YC F25.",
    href: "https://castari.com",
  },
  {
    name: "Open Animate",
    description: "Open-source creative suite for AI agents.",
    href: "https://github.com/jacobcwright/open-animate",
  },
  {
    name: "Sister",
    description: "AI beauty assistant. Grew to 2M+ users.",
    href: "https://apps.apple.com/us/app/sister-glow-up/id6502375076",
  },
  {
    name: "RunPod",
    description: "Built and shipped AI infrastructure and tooling for the platform.",
    href: "https://runpod.io",
  },
  {
    name: "JustBuild",
    description: "Utah's largest community of engineers. Hosting monthly hackathons.",
    href: "https://justbuild.ing",
  },
  {
    name: "Proxy",
    description: "AI startup. Built the product from zero to revenue.",
  },
  {
    name: "Life Help",
    description: "Implemented worldwide as the LDS Church's Meetinghouse Locator.",
  },
];

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-zinc-100 py-14 sm:py-16" aria-labelledby="work-title">
      <h2 id="work-title" className="text-lg font-semibold text-zinc-900">
        Things I&apos;ve built
      </h2>
      <ul className="mt-6 space-y-1">
        {workItems.map((item) => (
          <li
            key={item.name}
            className="-mx-3 rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-zinc-50"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-900"
                >
                  {item.name}
                </a>
              ) : (
                <span className="font-medium text-zinc-900">{item.name}</span>
              )}
              <span className="text-sm text-zinc-500">{item.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
