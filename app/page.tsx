import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import {
  profile,
  experience,
  projects,
  skills,
  education,
  clients,
  journey,
  numbers,
  services,
} from "@/data/resume";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const asset = (path: string) => `${basePath}/${path}`;
const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Download() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionHead({ index, label, title }: { index: string; label: string; title: React.ReactNode }) {
  return (
    <div className="section__head reveal">
      <p className="eyebrow">
        <span className="eyebrow__index">{index}</span>
        {label}
      </p>
      <h2 className="section__title">{title}</h2>
    </div>
  );
}

function Showcase({ shot, url, name }: { shot: string; url?: string; name: string }) {
  return (
    <div className="showcase">
      <div className="browser">
        <div className="browser__bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <p className="browser__url">{url ? host(url) : name}</p>
        </div>
        <img
          className="browser__img"
          src={asset(`projects/${shot}.jpg`)}
          alt={`${name} website on desktop`}
          width={1440}
          height={900}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="phone">
        <img
          src={asset(`projects/${shot}-mobile.jpg`)}
          alt={`${name} website on mobile`}
          width={508}
          height={1100}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav basePath={basePath} />
      <Reveal />

      <main id="top">
        {/* ——— Hero ——— */}
        <section className="hero">
          <div className="hero__grid-bg" aria-hidden="true" />
          <div className="container">
            <p className="status reveal">
              <span className="dot" aria-hidden="true" />
              Available for full-stack roles
              <span className="status__sep" aria-hidden="true" />
              {profile.location}
            </p>

            <h1 className="hero__name reveal">
              Gaurav Singh<span className="hero__period">.</span>
            </h1>

            <div className="hero__grid">
              <div className="hero__copy reveal">
                <p className="hero__role">
                  Full stack engineer building <em>fast</em> booking &amp; streaming products.
                </p>
                <p className="hero__lede">
                  {profile.years} years shipping OTT, cinema and live-event platforms across India and the GCC — React and
                  Next.js at the core, Node.js and REST APIs end to end.
                </p>
                <div className="hero__ctas">
                  <a className="btn btn--primary" href="#work">
                    View work <Arrow />
                  </a>
                  <a className="btn btn--ghost" href={asset(profile.resume)} download>
                    <Download /> Download résumé
                  </a>
                </div>
                <ul className="pills" aria-label="Core stack">
                  {profile.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="terminal reveal" role="figure" aria-label="What Gaurav is working on now">
                <div className="terminal__bar">
                  <span />
                  <span />
                  <span />
                  <p>~/gaurav — zsh</p>
                </div>
                <div className="terminal__body">
                  <p className="terminal__cmd">
                    <span className="terminal__prompt">❯</span> gaurav --now
                  </p>
                  <dl>
                    <div>
                      <dt>role</dt>
                      <dd>{profile.role}</dd>
                    </div>
                    <div>
                      <dt>company</dt>
                      <dd>Enpointe Global · Mumbai</dd>
                    </div>
                    <div>
                      <dt>building</dt>
                      <dd className="accent">dubaiopera.com</dd>
                    </div>
                    <div>
                      <dt>stack</dt>
                      <dd>next · react · node · ts</dd>
                    </div>
                    <div>
                      <dt>shipped</dt>
                      <dd>8+ platforms · IN · UAE · QA · GCC</dd>
                    </div>
                    <div>
                      <dt>experience</dt>
                      <dd>{profile.years} years</dd>
                    </div>
                  </dl>
                  <p className="terminal__ok">
                    <span aria-hidden="true">✓</span> open to opportunities
                  </p>
                  <p className="terminal__cmd">
                    <span className="terminal__prompt">❯</span>
                    <span className="cursor" aria-hidden="true" />
                  </p>
                </div>
              </div>
            </div>

            <div className="clients reveal">
              <p className="clients__label">Shipped for</p>
              <ul className="clients__list">
                {clients.map((c) => (
                  <li key={c.name}>
                    <a href={c.url} target="_blank" rel="noopener">
                      {c.name}
                      <span className="clients__meta">{c.region}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ——— Numbers ——— */}
        <section className="numbers container" aria-label="By the numbers">
          {numbers.map((n) => (
            <div className="number reveal" key={n.label}>
              <p className="number__value">
                {n.value}
                {n.unit && <span>{n.unit}</span>}
              </p>
              <p className="number__label">{n.label}</p>
            </div>
          ))}
        </section>

        {/* ——— What I build ——— */}
        <section className="section container">
          <SectionHead index="01" label="What I build" title="Products where speed and checkout matter." />
          <ol className="services">
            {services.map((s, i) => (
              <li className="service reveal" key={s.title}>
                <span className="service__index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__detail">{s.detail.join(" · ")}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ——— Work ——— */}
        <section id="work" className="section container">
          <SectionHead index="02" label="Selected work" title="Platforms people book, pay and stream on." />
          <div className="work">
            {projects.map((p, i) => (
              <article className={`work__item reveal ${i % 2 ? "work__item--flip" : ""}`} key={p.name}>
                <Showcase shot={p.shot} url={p.url} name={p.name} />
                <div className="work__info">
                  <p className="work__meta">
                    <span className="work__index">{String(i + 1).padStart(2, "0")}</span>
                    <span>{p.period}</span>
                  </p>
                  <h3 className="work__name">{p.name}</h3>
                  <p className="work__kind">{p.kind}</p>
                  <p className="work__summary">{p.summary}</p>
                  <div className="work__metric">
                    <span className="work__metric-value">{p.metric.value}</span>
                    <span className="work__metric-label">{p.metric.label}</span>
                  </div>
                  <p className="work__tags">{p.tags.join(" · ")}</p>
                  {p.url && (
                    <a className="btn btn--ghost btn--small" href={p.url} target="_blank" rel="noopener">
                      View live <Arrow />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ——— Experience ——— */}
        <section id="experience" className="section container">
          <SectionHead index="03" label="Experience" title="One team, four flagship platforms." />
          {experience.map((job) => (
            <div className="exp" key={job.company}>
              <div className="exp__card reveal">
                <p className="exp__period">{job.period}</p>
                <h3 className="exp__role">{job.role}</h3>
                <p className="exp__company">
                  {job.company} · {job.location}
                </p>
                <ul className="exp__points">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
              <ol className="timeline reveal" aria-label="Project timeline">
                {journey.map((j) => (
                  <li className={`timeline__item ${j.current ? "is-current" : ""}`} key={j.title}>
                    <span className="timeline__dot" aria-hidden="true" />
                    <p className="timeline__year">
                      {j.year}
                      {j.current && <span className="timeline__now">Now</span>}
                    </p>
                    <p className="timeline__title">{j.title}</p>
                    <p className="timeline__note">{j.note}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>

        {/* ——— Skills ——— */}
        <section id="skills" className="section container">
          <SectionHead index="04" label="Skills" title="Frontend depth, full-stack range." />
          <div className="skills">
            {skills.map((g) => (
              <div className="skill reveal" key={g.group}>
                <h3 className="skill__group">{g.group}</h3>
                <p className="skill__items">{g.items.join(" · ")}</p>
              </div>
            ))}
          </div>

          <div className="edu reveal">
            {education.map((e) => (
              <div className="edu__row" key={e.school}>
                <p className="edu__degree">{e.degree}</p>
                <p className="edu__school">{e.school}</p>
                <p className="edu__meta">
                  {e.score} · {e.period}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ——— Contact ——— */}
        <section id="contact" className="contact container">
          <p className="eyebrow reveal">
            <span className="eyebrow__index">05</span>Contact
          </p>
          <h2 className="contact__title reveal">
            Let’s build
            <br />
            something <em>fast.</em>
          </h2>
          <p className="contact__lede reveal">Have a product that needs to be fast? I’d love to hear about it.</p>
          <a className="contact__email reveal" href={`mailto:${profile.email}`}>
            {profile.email}
            <Arrow />
          </a>
          <div className="contact__links reveal">
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noopener">
              LinkedIn <Arrow />
            </a>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noopener">
              GitHub <Arrow />
            </a>
            <a className="btn btn--ghost" href={asset(profile.resume)} target="_blank" rel="noopener">
              Résumé <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} Gaurav Singh · Full Stack Engineer</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
