import { useEffect, useMemo, useRef, useState } from "react";
import {
  profile,
  pipeline,
  skillGroups,
  projects,
  cicd,
  education,
  codingProfiles,
} from "./data";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "cicd", label: "CI/CD" },
  { id: "education", label: "Education" },
  { id: "profiles", label: "Coding profiles" },
];

function ExternalLink({ href, children, className }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

/* A dropdown row: header is a button, body expands below it. */
function Disclosure({ title, subtitle, badge, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useRef(`d-${Math.random().toString(36).slice(2, 9)}`).current;
  return (
    <div className={`disclosure${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="disclosure-head"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="disclosure-text">
          <span className="disclosure-title">{title}</span>
          {subtitle && <span className="disclosure-sub">{subtitle}</span>}
        </span>
        {badge && <span className="badge">{badge}</span>}
        <svg className="chevron" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="disclosure-body" id={bodyId} role="region">
        <div className="disclosure-inner">{children}</div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="portrait" src="/profile.jpg" alt="Portrait of Maneish Bisht" width="145" height="233" />
      <h2 className="name">{profile.name}</h2>
      <p className="role">{profile.role}</p>
      <ul className="contact">
        <li>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
        </li>
        <li>
          <ExternalLink href={profile.github}>github.com/maneishbisht</ExternalLink>
        </li>
      </ul>
    </aside>
  );
}

function Hero() {
  return (
    <header className="hero">
      <h1>{profile.headline}</h1>
      <p className="lede">{profile.summary}</p>
      <ol className="pipeline" aria-label="My delivery pipeline">
        {pipeline.map((p, i) => (
          <li key={p.step} style={{ "--i": i }}>
            <span className="pipe-step">{p.step}</span>
            <span className="pipe-tool">{p.tool}</span>
          </li>
        ))}
      </ol>
    </header>
  );
}

/* ---------- Tab panels ---------- */

function Overview({ goTo }) {
  return (
    <div className="stack">
      <p className="prose">
        I'm finishing a B.Tech in Computer Science at Galgotias University (2022–26) with an 8.4 CGPA. I like owning a
        project end to end: writing the Next.js or MERN app, containerizing it, provisioning the AWS infrastructure
        with Terraform, and wiring up GitHub Actions and Argo CD so every push reaches production the same way.
      </p>
      <p className="prose">
        My current focus is Repo Explorer, a GitHub profile explorer with Redis caching and rate limiting, which I'm
        moving onto a fully automated Terraform and Kubernetes pipeline.
      </p>
      <div className="quick">
        <button type="button" className="quick-link" onClick={() => goTo("projects")}>
          See projects
        </button>
        <button type="button" className="quick-link" onClick={() => goTo("cicd")}>
          See the CI/CD repositories
        </button>
        <a className="quick-link" href={`mailto:${profile.email}`}>
          Send an email
        </a>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="list">
      {skillGroups.map((g, i) => (
        <Disclosure key={g.title} title={g.title} badge={`${g.items.length}`} defaultOpen={i === 0}>
          <ul className="chips">
            {g.items.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Disclosure>
      ))}
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const tags = useMemo(() => ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))], []);
  const shown = projects.filter((p) => filter === "All" || p.tags.includes(filter));
  return (
    <div className="stack">
      <div className="toolbar">
        <label htmlFor="tag-filter">Filter by technology</label>
        <select id="tag-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          {tags.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="list">
        {shown.map((p) => (
          <Disclosure key={p.name} title={p.name} subtitle={p.summary}>
            <p>{p.details}</p>
            <ul className="chips">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="links">
              {p.links.map((l) => (
                <ExternalLink key={l.url} href={l.url}>
                  {l.label}
                </ExternalLink>
              ))}
            </p>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

function CiCd() {
  return (
    <div className="stack">
      <p className="prose">{cicd.intro}</p>
      <div className="list">
        {cicd.repos.map((r, i) => (
          <Disclosure key={r.name} title={r.name} badge={r.role} defaultOpen={i === 0}>
            <p>{r.description}</p>
            <p className="links">
              <ExternalLink href={r.url}>Open on GitHub</ExternalLink>
            </p>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

function Education() {
  return (
    <ul className="edu">
      {education.map((e) => (
        <li key={e.title}>
          <div>
            <h3>{e.title}</h3>
            <p>
              {e.place}
              {e.years ? `, ${e.years}` : ""}
            </p>
          </div>
          <span className="result">{e.result}</span>
        </li>
      ))}
    </ul>
  );
}

function Profiles() {
  return (
    <ul className="profiles">
      {codingProfiles.map((p) => (
        <li key={p.name}>
          <ExternalLink href={p.url}>
            <span>{p.name}</span>
            <span className="url">{p.url.replace("https://", "")}</span>
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}

/* ---------- App shell ---------- */

export default function App() {
  const initial = () => {
    const h = window.location.hash.replace("#", "");
    return TABS.some((t) => t.id === h) ? h : "overview";
  };
  const [tab, setTab] = useState(initial);
  const tabRefs = useRef({});

  useEffect(() => {
    window.history.replaceState(null, "", `#${tab}`);
  }, [tab]);

  useEffect(() => {
    const onHash = () => setTab(initial());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const onKeyDown = (e) => {
    const i = TABS.findIndex((t) => t.id === tab);
    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % TABS.length;
    if (e.key === "ArrowLeft") next = (i - 1 + TABS.length) % TABS.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = TABS.length - 1;
    if (next !== null) {
      e.preventDefault();
      setTab(TABS[next].id);
      tabRefs.current[TABS[next].id]?.focus();
    }
  };

  const panels = {
    overview: <Overview goTo={setTab} />,
    skills: <Skills />,
    projects: <Projects />,
    cicd: <CiCd />,
    education: <Education />,
    profiles: <Profiles />,
  };

  return (
    <div className="shell">
      <Sidebar />
      <main className="main">
        <Hero />
        <div className="tabs" role="tablist" aria-label="Portfolio sections" onKeyDown={onKeyDown}>
          {TABS.map((t) => (
            <button
              key={t.id}
              ref={(el) => (tabRefs.current[t.id] = el)}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              tabIndex={tab === t.id ? 0 : -1}
              className="tab"
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <section className="panel" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} key={tab}>
          {panels[tab]}
        </section>
        <footer className="footer">© {new Date().getFullYear()} Maneish Bisht</footer>
      </main>
    </div>
  );
}
