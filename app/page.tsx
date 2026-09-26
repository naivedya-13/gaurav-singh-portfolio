import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { profile, stats, experience, projects, skills, education } from "@/data/resume";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
      <Nav basePath={basePath} />
      <Reveal />

      <main id="top">
        {/* Hero */}
        <section className="hero container">
          <p className="hero__status reveal">
            <span className="dot" aria-hidden="true" /> Open to full-stack roles · {profile.location}
          </p>
          <h1 className="hero__title reveal">
            Full stack engineer building <em>fast</em> booking &amp; streaming products.
          </h1>
          <div className="hero__grid">
            <p className="hero__lede reveal">{profile.summary}</p>
            <div className="hero__side reveal">
              <div className="hero__ctas">
                <a className="btn" href="#work">
                  See selected work
                </a>
                <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
                  Get in touch <Arrow />
                </a>
              </div>
              <ul className="stack-list" aria-label="Core stack">
                {profile.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <dl className="stats reveal">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <dt className="stat__value">{s.value}</dt>
                <dd className="stat__label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Work */}
        <section id="work" className="section container">
          <SectionHead index="01" label="Selected work" title={<>Platforms people book, pay and stream on.</>} />
          <div className="projects">
            {projects.map((p, i) => (
              <article className="project reveal" key={p.name}>
                <div className="project__top">
                  <span className="project__index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="project__period">{p.period}</span>
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
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
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
                <p className="job__period">{job.period}</p>
                <h3 className="job__company">{job.company}</h3>
                <p className="job__location">{job.location}</p>
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
        </section>

        {/* Skills */}
        <section id="skills" className="section container">
          <SectionHead index="03" label="Toolkit" title={<>Frontend depth, full-stack range.</>} />
          <div className="skills">
            {skills.map((g) => (
              <div className="skill-group reveal" key={g.group}>
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
        <section id="contact" className="contact container">
          <p className="eyebrow reveal">
            <span className="eyebrow__index">05</span> Contact
          </p>
          <h2 className="contact__title reveal">
            Have a product that needs to be <em>fast</em>? Let’s talk.
          </h2>
          <a className="contact__email reveal" href={`mailto:${profile.email}`}>
            {profile.email} <Arrow />
          </a>
          <div className="contact__links reveal">
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
        </section>
      </main>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} Gaurav Singh</p>
        <p>Built with Next.js &amp; TypeScript</p>
      </footer>
    </>
  );
}
