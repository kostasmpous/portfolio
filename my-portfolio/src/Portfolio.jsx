import { useEffect, useState } from 'react'
import { ArrowUpRight, Gauge, Layers, Search, Shield, Sparkles } from 'lucide-react'
import avatar from './assets/avatar.webp'
import {
  about, certifications, education, experience, profile, projects, skills,
} from './data'

const AREAS = {
  ai: { label: 'AI engineering', color: 'var(--warm)', tint: 'var(--ember-100)' },
  salesforce: { label: 'Salesforce', color: 'var(--accent)', tint: 'var(--sky-100)' },
  data: { label: 'Data & search', color: 'var(--green)', tint: 'var(--meadow-100)' },
}
const ICONS = { shield: Shield, gauge: Gauge, layers: Layers, search: Search }

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap">
        <a href="#top" className="brand">
          <img src={avatar} alt="" width="32" height="32" />
          {profile.name}
        </a>
        <ul className="links">
          <li><a href="#work">Work</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <a href="#contact" className="btn primary">Contact</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <span className="status"><i />{profile.status}</span>
        <h1>Salesforce developer, building with <em>AI</em>.</h1>
        <p className="lede">{profile.lede}</p>
        <div className="ctas">
          <a href="#work" className="btn primary">View my work</a>
          <a href={profile.links.github} className="btn" target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <ul className="meta">
          {profile.meta.map((m) => (
            <li key={m.text}>{m.strong && <b>{m.strong}</b>} {m.text}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ProjectCard({ p }) {
  const area = AREAS[p.area] ?? AREAS.ai
  const Icon = ICONS[p.icon] ?? Sparkles
  return (
    <li className="card">
      <div className="shot" style={{ '--tint': area.tint, '--tone': area.color }} aria-hidden="true">
        <Icon size={44} strokeWidth={1.5} />
        <span>{p.context}</span>
      </div>
      <div className="body">
        <div className="row">
          <span className="area"><i style={{ background: area.color }} />{area.label}</span>
          <span>{p.year}</span>
        </div>
        <h3>
          {p.url
            ? <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
            : p.title}
        </h3>
        <p className="desc">{p.desc}</p>
        <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </li>
  )
}

function Work() {
  return (
    <section className="block" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <div className="head"><h2 id="work-h">Selected work</h2><p>AI agents, evaluation and search</p></div>
        <ul className="grid">{projects.map((p) => <ProjectCard key={p.title} p={p} />)}</ul>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="block" id="experience" aria-labelledby="exp-h">
      <div className="wrap">
        <div className="head">
          <h2 id="exp-h">Experience</h2>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">Full history on LinkedIn →</a>
        </div>
        <ol className="jobs">
          {experience.map((j) => (
            <li key={j.role + j.period}>
              <h3>{j.role} <span>· {j.org}</span></h3>
              <time>{j.period}</time>
              <p>{j.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="block" id="about" aria-labelledby="about-h">
      <div className="wrap">
        <div className="head"><h2 id="about-h">About</h2></div>
        <div className="split">
          <div className="about">{about.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}</div>
          <div className="facts">
            <div>
              <h3>Education</h3>
              <ul>{education.map((e) => <li key={e.title}><b>{e.title}</b><span>{e.meta}</span></li>)}</ul>
            </div>
            <div>
              <h3>Certifications</h3>
              <ul>{certifications.map((c) => <li key={c}><b>{c}</b></li>)}</ul>
            </div>
            <div>
              <h3>Skills</h3>
              <ul className="chips">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(profile.email).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <section className="contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <div className="cta">
          <h2 id="contact-h">Looking for a Salesforce developer who knows AI?</h2>
          <p>Email is the quickest way to reach me. I usually reply within a day.</p>
          <div className="ctas">
            <a href={`mailto:${profile.email}`} className="btn">{profile.email}</a>
            <button type="button" className="btn ghost" onClick={copy} aria-live="polite">
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <ul>
          <li><a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default function Portfolio() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
