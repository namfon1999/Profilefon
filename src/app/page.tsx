import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { profile } from "@/data/profile";

const hasPhoto = existsSync(path.join(process.cwd(), "public", profile.photo));

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative mx-auto w-64 sm:w-72">
      <div className="absolute -right-5 -bottom-5 h-2/3 w-2/3 rounded-3xl bg-brand-100" />
      <div className="absolute -top-5 -left-5 h-24 w-24 rounded-2xl bg-brand-200/60" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white shadow-xl shadow-brand-500/10">
        {hasPhoto ? (
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            preload
            sizes="(min-width: 640px) 288px, 256px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand-100 to-brand-200 text-6xl font-bold text-ink">
            NB
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-brand-100/70 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-bold text-ink">
            Namfon<span className="text-brand-500">.</span>
          </a>
          <ul className="hidden gap-8 text-sm font-medium sm:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-brand-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.contact.email}`}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Hire me
          </a>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600 ring-1 ring-brand-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to new opportunities
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-ink sm:text-6xl">
              Hi, I&apos;m {profile.name.split(" ")[0]}
              <span className="block text-brand-500">{profile.role}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
              I design websites, applications, and back-office systems that balance user
              experience, ease of use, and business goals — from first wireframe to the
              live product.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#experience"
                className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="rounded-full bg-white px-6 py-3 font-semibold text-ink ring-1 ring-brand-100 transition hover:ring-brand-200"
              >
                Get in touch
              </a>
            </div>
          </div>
          <Avatar />
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 bg-white py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
            <div>
              <SectionTitle eyebrow="About me" title="Designing with empathy & detail" />
              <p className="text-lg leading-relaxed text-foreground/80">{profile.about}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-brand-50 p-8">
                <h3 className="text-lg font-bold text-ink">What I&apos;ve designed</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {profile.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink ring-1 ring-brand-100"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-brand-50 p-8">
                <h3 className="text-lg font-bold text-ink">Education</h3>
                {profile.education.map((e) => (
                  <div key={e.degree} className="mt-4">
                    <p className="font-semibold text-ink">{e.degree}</p>
                    <p className="text-foreground/70">{e.school}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <SectionTitle eyebrow="Career" title="Work Experience" />
            <ol className="relative border-l-2 border-brand-100">
              {profile.experience.map((job) => (
                <li key={job.company} className="relative mb-12 pl-8 last:mb-0">
                  <span className="absolute top-1.5 -left-[9px] h-4 w-4 rounded-full border-4 border-background bg-brand-500" />
                  <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-brand-100/70">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-ink">{job.title}</h3>
                        <p className="mt-1 font-semibold text-brand-500">{job.company}</p>
                      </div>
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-600">
                        {job.period}
                      </span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-3 leading-relaxed text-foreground/80">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-200" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle eyebrow="Toolbox" title="Tools & Technologies" />
            <div className="grid gap-6 md:grid-cols-3">
              {profile.skills.map((s, i) => (
                <div
                  key={s.group}
                  className="rounded-3xl bg-brand-50 p-8 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/10"
                >
                  <span className="text-sm font-bold text-brand-500">0{i + 1}</span>
                  <h3 className="mt-2 text-lg font-bold text-ink">{s.group}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink ring-1 ring-brand-100"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-[2rem] bg-ink px-8 py-14 text-center text-white sm:px-14">
              <h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s work together</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/75">
                Have a project in mind or just want to say hi? I&apos;d love to hear from you.
              </p>
              <div className="mt-10 grid gap-4 text-left md:grid-cols-[1.4fr_1fr_1fr]">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15"
                >
                  <p className="text-xs uppercase tracking-widest text-white/60">Email</p>
                  <p className="mt-1 font-semibold break-words">{profile.contact.email}</p>
                </a>
                <a
                  href={profile.contact.phoneHref}
                  className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15"
                >
                  <p className="text-xs uppercase tracking-widest text-white/60">Phone</p>
                  <p className="mt-1 font-semibold">{profile.contact.phone}</p>
                </a>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xs uppercase tracking-widest text-white/60">Location</p>
                  <p className="mt-1 font-semibold">{profile.contact.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-foreground/60">
        © 2026 {profile.name}. Designed & built with Next.js.
      </footer>
    </>
  );
}
