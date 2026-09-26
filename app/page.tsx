import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { profile, stats, experience, projects, skills, education, clients, journey } from "@/data/resume";
import type { ProjectIcon } from "@/data/resume";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Icon({ name }: { name: ProjectIcon }) {
  const common = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {name === "play" && (
        <>
          <rect x="3" y="4" width="18" height="14" rx="3" {...common} />
          <path d="M10 8.5v5l4.5-2.5L10 8.5ZM8 21h8" {...common} />
        </>
      )}
      {name === "ticket" && (
        <path
          d="M3 8a2 2 0 0 0 0 4v0a2 2 0 0 1 0 4v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a2 2 0 0 1 0-4 2 2 0 0 1 0-4V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1ZM14 6v2M14 11v2M14 16v2"
          {...common}
        />
      )}
      {name === "stage" && (
        <path d="M3 20h18M5 20V9l7-5 7 5v11M9 20v-5a3 3 0 0 1 6 0v5M3 9h18" {...common} />
      )}
    </svg>
  );
}

function SectionHead({ index, label, title }: { index: string; label: string; title: React.ReactNode }) {
  return (
    <div className="section__head reveal">
      <p className="eyebrow">
        <span className="eyebrow__index">{index}</span> {label}
      </p>
      <h2 className="section__title">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="progress" aria-hidden="true" />
      <Nav basePath={basePath} />
      <Reveal />

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="hero__bg" aria-hidden="true">
            <div className="hero__grid-lines" />
            <div className="hero__glow" />
          </div>

          <div className="container">
            <p className="hero__status reveal">
              <span className="dot" aria-hidden="true" /> Open to full-stack roles · {profile.location}
            </p>
            <h1 className="hero__title reveal">
              Full stack engineer building <em className="squiggle">fast</em> booking &amp; streaming products.
            </h1>

            <div className="hero__grid">
              <div className="reveal">
                <p className="hero__lede">{profile.summary}</p>
                <div className="hero__ctas">
                  <a className="btn" href="#work">
                    See selected work
                  </a>
                  <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
                    Get in touch <Arrow />
                  </a>
                </div>
              </div>

              <div className="terminal reveal" aria-label="Currently">
                <div className="terminal__bar">
                  <span />
                  <span />
                  <span />
                  <p>~/gaurav — now</p>
                </div>
                <dl className="terminal__body">
                  <div>
                    <dt>building</dt>
                    <dd>
                      dubaiopera.com<span className="cursor" aria-hidden="true" />
                    </dd>
                  </div>
                  <div>
                    <dt>role</dt>
                    <dd>{profile.role} @ Enpointe Global</dd>
                  </div>
                  <div>
                    <dt>stack</dt>
                    <dd>{profile.stack.join(" · ")}</dd>
                  </div>
                  <div>
                    <dt>shipped</dt>
                    <dd>8+ platforms · India · GCC</dd>
                  </div>
                  <div>
                    <dt>status</dt>
                    <dd className="ok">open to opportunities</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="clients reveal">
              <p className="clients__label">
                Shipped for <span>{clients.length} platforms across India &amp; the GCC</span>
              </p>
              <ul className="clients__grid">
                {clients.map((c) => (
                  <li key={c.name}>
                    <a className="client" href={c.url} target="_blank" rel="noopener" aria-label={`${c.name} — visit site`}>
                      <span className="client__mono" aria-hidden="true">
                        {c.mono}
                      </span>
                      <span className="client__text">
                        <span className="client__name">{c.name}</span>
                        <span className="client__meta">
                          {c.sector} · {c.region}
                        </span>
                      </span>
                      <span className="client__arrow" aria-hidden="true">
                        <Arrow />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="container">
            <dl className="stats reveal">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <dt className="stat__value">{s.value}</dt>
                  <dd className="stat__label">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section container">
          <SectionHead index="01" label="Selected work" title={<>Platforms people book, pay and stream on.</>} />
          <div className="projects">
            {projects.map((p, i) => (
              <article className={`project spotlight reveal ${i === 0 ? "project--featured" : ""}`} key={p.name}>
                <div className="project__top">
                  <span className="project__badge">
                    <span className="project__icon">
                      <Icon name={p.icon} />
                    </span>
                    <span className="project__index">{String(i + 1).padStart(2, "0")}</span>
                  </span>
                  <span className="project__period">
                    {p.period === "Ongoing" && <span className="dot dot--small" aria-hidden="true" />}
                    {p.period}
                  </span>
                </div>
                <div className="project__body">
                  <div>
                    <p className="project__kind">{p.kind}</p>
                    <h3 className="project__name">
                      {p.url ? (
                        <a href={p.url} target="_blank" rel="noopener">
                          {p.name} <Arrow />
                        </a>
                      ) : (
                        p.name
                      )}
                    </h3>
                    <p className="project__summary">{p.summary}</p>
                  </div>
                  <div className="project__metric">
                    <span className="project__metric-value">{p.metric.value}</span>
                    <span className="project__metric-label">{p.metric.label}</span>
                  </div>
                </div>
                <div className="project__foot">
                  <ul className="tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {p.url && (
                    <a className="project__visit" href={p.url} target="_blank" rel="noopener">
                      {new URL(p.url).hostname.replace(/^www\./, "")} <Arrow />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section container">
          <SectionHead index="02" label="Experience" title={<>Shipping for clients across India, Qatar and the UAE.</>} />
          {experience.map((job) => (
            <div className="job reveal" key={job.company}>
              <div className="job__meta">
                <span className="job__logo" aria-hidden="true">
                  EG
                </span>
                <div>
                  <p className="job__period">{job.period}</p>
                  <h3 className="job__company">{job.company}</h3>
                  <p className="job__location">{job.location}</p>
                </div>
              </div>
              <div>
                <p className="job__role">{job.role}</p>
                <ul className="job__points">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <ol className="journey reveal" aria-label="Project timeline">
            {journey.map((j, i) => (
              <li className={`journey__step ${i === journey.length - 1 ? "is-current" : ""}`} key={j.title}>
                <span className="journey__dot" aria-hidden="true" />
                <p className="journey__date">{j.date}</p>
                <p className="journey__title">{j.title}</p>
                <p className="journey__note">{j.note}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section id="skills" className="section container">
          <SectionHead index="03" label="Toolkit" title={<>Frontend depth, full-stack range.</>} />
          <div className="skills">
            {skills.map((g) => (
              <div className="skill-group spotlight reveal" key={g.group}>
                <h3 className="skill-group__title">{g.group}</h3>
                <ul className="tags">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="section container">
          <SectionHead index="04" label="Education" title={<>Computer applications, first-class.</>} />
          <div className="edu">
            {education.map((e) => (
              <div className="edu__row reveal" key={e.school}>
                <p className="edu__period">{e.period}</p>
                <div>
                  <h3 className="edu__degree">{e.degree}</h3>
                  <p className="edu__school">{e.school}</p>
                </div>
                <p className="edu__score">{e.score}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container contact-wrap">
          <div className="contact spotlight reveal">
            <p className="eyebrow">
              <span className="eyebrow__index">05</span> Contact
            </p>
            <h2 className="contact__title">
              Have a product that needs to be <em>fast</em>? Let’s talk.
            </h2>
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email} <Arrow />
            </a>
            <div className="contact__links">
              <a href={profile.linkedin} target="_blank" rel="noopener">
                LinkedIn <Arrow />
              </a>
              <a href={profile.github} target="_blank" rel="noopener">
                GitHub <Arrow />
              </a>
              <a href={`${basePath}/${profile.resume}`} target="_blank" rel="noopener">
                Résumé (PDF) <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p className="footer__word" aria-hidden="true">
          Gaurav Singh<em>.</em>
        </p>
        <div className="footer__row">
          <p>© {new Date().getFullYear()} Gaurav Singh · Full Stack Engineer · Mumbai</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
