import Image from "next/image";

const projects = [
  { name: "Nexa", year: "2026", image: "/images/nexa.jpg" },
  { name: "SandPeak", year: "2025", image: "/images/sandpeak.jpg" },
  { name: "Diagnose", year: "2026", image: "/images/diagnose.jpg" },
  { name: "Nova", year: "2026", image: "/images/nova.jpg" },
];

const testimonials = [
  {
    quote:
      "Enquiries did increase after working with Jaeyi. The cleaner and easier-to-use website helped attract more audiences and views, which then converted into better ROI.",
    name: "Glenn Pay",
    role: "Head of Operations",
    company: "CA Practice PAC",
  },
  {
    quote:
      "The redesigned site now reflects that credibility much better, with a polished presentation, clearer structure, and an overall experience that matches the standards we want associated with our brand.",
    name: "Derrick",
    role: "Advisory Director",
    company: "Lucid Socials",
  },
  {
    quote:
      "Working with jae is fast and efficient, he was flexible in working with my schedule and churned out a beautiful website!",
    name: "Jia Hao",
    role: "Founder",
    company: "",
  },
];

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Templates", href: "#templates" },
  { label: "Archive", href: "#archive" },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-sm font-semibold tracking-tight">
            Jaeyi
          </a>
          <ul className="hidden items-center gap-8 text-sm text-[#a1a1aa] sm:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-[#363cff] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#4a4fff]"
          >
            Arrange a call
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-24 text-center sm:pt-32">
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-[#f7f7f8] sm:text-6xl">
            I&apos;m Jaeyi. I build scalable websites that make ambitious B2B
            brands the obvious market leader.
          </h1>
          <p className="mt-6 flex items-center gap-2 text-sm text-[#a1a1aa]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#35f2a7] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#35f2a7]" />
            </span>
            I have 2 slots open for September.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#363cff] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#4a4fff]"
            >
              Arrange a call
            </a>
            <a
              href="#templates"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-[#f7f7f8] transition hover:border-white/30"
            >
              Explore templates
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#131316]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="font-medium text-[#f7f7f8]">
                    {project.name}
                  </span>
                  <span className="text-sm text-[#a1a1aa]">
                    Launched {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section id="templates" className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-[#a1a1aa]">
            Clients
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#131316] p-6"
              >
                <blockquote className="text-[15px] leading-relaxed text-[#e4e4e7]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-medium text-[#f7f7f8]">{t.name}</div>
                  <div className="text-sm text-[#a1a1aa]">
                    {t.role}
                    {t.company ? `, ${t.company}` : ""}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="archive" className="mx-auto max-w-3xl px-6 pb-24 text-center">
          <div className="mx-auto mb-6 h-16 w-16 overflow-hidden rounded-full border border-white/10">
            <Image
              src="/images/avatar.jpg"
              alt="Jaeyi"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-lg leading-relaxed text-[#e4e4e7]">
            Hi, I&apos;m a designer, creator, and entrepreneur based in
            Singapore. I&apos;ve been fortunate to work with companies across
            various industries. Whether it was a full strategic overhaul, or
            single-page projects, the goal has always been to deliver results
            in the shortest time possible.
          </p>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer
        id="contact"
        className="border-t border-white/10 bg-[#09090b] px-6 py-12"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-medium text-[#f7f7f8] sm:text-3xl">
            Contact
          </h2>
          <div className="flex flex-col items-center gap-2 text-[#a1a1aa]">
            <a
              href="https://cal.com/jaeyi/intro"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              cal.com/jaeyi/intro
            </a>
            <a
              href="mailto:jae@bigbowl.studio"
              className="transition hover:text-white"
            >
              jae@bigbowl.studio
            </a>
            <span>@jaeyippy</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#a1a1aa]">
            <a href="#" className="transition hover:text-white">
              Instagram
            </a>
            <a href="#" className="transition hover:text-white">
              YouTube
            </a>
            <a href="#" className="transition hover:text-white">
              LinkedIn
            </a>
          </div>
          <p className="mt-4 text-xs text-[#71717a]">© 2026 JAEYI</p>
        </div>
      </footer>
    </div>
  );
}
