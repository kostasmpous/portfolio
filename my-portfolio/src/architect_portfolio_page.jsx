import { useState,useRef,useEffect } from 'react'
import { motion } from 'framer-motion'
import me from './me.PNG';
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
/* ─── Design tokens ───────────────────────────────────────────────────────── */
const BG   = '#EDEAE5'
const RED  = '#CC1111'
const BLK  = '#0D0D0D'
const GRAY = '#6A6767'
const LG   = '#A8A5A2'
const BDR  = '#DDD9D4'
const CBG  = '#F2EFE9'

/* ─── Fade-up for scroll-triggered sections ──────────────────────────────── */
const rv = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true },
  transition:  { duration: 0.52, delay, ease: [0.16, 1, 0.3, 1] },
})

/* ─── Static data ─────────────────────────────────────────────────────────── */
const NAV_ITEMS = ['ME', 'WORK', 'SPECS']

const socials = [
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/konstantinos-bous/",
    bg: "bg-[#A855F7]", // purple
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:kostasmpous@gmail.com",
    bg: "bg-[#0EA5E9]", // blue
    label: "Email",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/kostasmpous",
    bg: "bg-[#0B132B]", // dark navy
    label: "GitHub",
  },
];

const PROJECTS = [
  {
    iconBg: '#5B21B6', iconLetter: 'N', tag: 'FIGMA',
    name: 'Neo_Brutalist_Core',
    desc: 'A spatial web composition built with raw geometric tension and neo-brutalist visual language for high-impact digital environments.',
  },
  {
    iconBg: '#0369A1', iconLetter: 'G', tag: 'REACT',
    name: 'Glass_Tectonics',
    desc: 'Layered interface system exploring transparency, depth, and material-aware design patterns across multi-surface UI architectures.',
  },
  {
    iconBg: '#991B1B', iconLetter: 'O', tag: 'DEPLOYED',
    name: 'Obsidian_Grid',
    desc: 'Precision layout framework for high-density information architecture, spatial navigation, and performant visual systems.',
  },
]

const TECH = [
  { label: 'FIGMA',      bg: '#7C3AED', lt: 'F'  },
  { label: 'REACT',      bg: '#0F172A', lt: 'R'  },
  { label: 'THREE.JS',   bg: '#111111', lt: '3'  },
  { label: 'TAILWIND',   bg: '#0369A1', lt: 'T'  },
  { label: 'TYPESCRIPT', bg: '#1D4ED8', lt: 'TS' },
  { label: 'NODE.JS',    bg: '#166534', lt: 'N'  },
]

/* ─── Portrait SVG ────────────────────────────────────────────────────────── */
function Portrait() {
  return (
    <div
      style={{
        position: 'relative',
        width: '270px',
        height: '310px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
      }}
    >
      <img
        src={me}
        alt="Konstantinos"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: '-86px',
          top: '42px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            style={{
              width: '58px',
              height: '58px',
              backgroundColor: '#fff',
              border: `1px solid ${BDR}`,
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(0,0,0,0.10)',
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                backgroundColor:
                  item.label === 'LinkedIn'
                    ? '#A855F7'
                    : item.label === 'Email'
                    ? '#0EA5E9'
                    : '#0B132B',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '15px',
              }}
            >
              {item.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Terminal code block ─────────────────────────────────────────────────── */
function CodeTerminal() {
  return (
    <div style={{
      backgroundColor: CBG,
      border: `1px solid ${BDR}`,
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
      maxWidth: '400px',
    }}>
      {/* Title bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '10px 16px',
        borderBottom: `1px solid ${BDR}`,
        backgroundColor: '#EAE7E2',
      }}>
        <div style={{ display: 'flex', gap: '5px' }}>
          {['#FF5F56', '#FFBD2E', '#27C93F'].map(c => (
            <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: c }} />
          ))}
        </div>
        <span style={{
          fontSize: '11px', color: LG,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.02em',
        }}>
          terminal — intro.py
        </span>
      </div>

      {/* Code */}
      <div style={{
        padding: '18px 20px',
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
        fontSize: '12.5px', lineHeight: 1.85,
      }}>
        <div>
          <span style={{ color: '#7c6af7' }}>def</span>
          <span style={{ color: BLK }}> design_solutions</span>
          <span style={{ color: '#888' }}>():</span>
        </div>
        <div style={{ paddingLeft: '26px' }}>
          <span style={{ color: '#555' }}>print</span>
          <span style={{ color: '#888' }}>(</span>
          <span style={{ color: '#2a9d60' }}>"Hello, I'm Konsta."</span>
          <span style={{ color: '#888' }}>)</span>
        </div>
        <div style={{ paddingLeft: '26px' }}>
          <span style={{ color: '#555' }}>print</span>
          <span style={{ color: '#888' }}>(</span>
          <span style={{ color: '#2a9d60' }}>"Building Software Solutions."</span>
          <span style={{ color: '#888' }}>)</span>
        </div>
        <div style={{ marginTop: '10px' }}>
          <span style={{ color: '#555' }}>design_solutions</span>
          <span style={{ color: '#888' }}>()</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Project card ────────────────────────────────────────────────────────── */
function ProjectCard({ p, index }) {
  return (
    <motion.div
      {...rv(index * 0.1)}
      style={{
        backgroundColor: '#fff',
        border: `1px solid ${BDR}`,
        borderRadius: '12px',
        padding: '22px',
        display: 'flex', flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{
          width: '40px', height: '40px',
          backgroundColor: p.iconBg,
          borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 800, fontSize: '15px',
        }}>
          {p.iconLetter}
        </div>
        <span style={{
          fontSize: '10px', letterSpacing: '0.1em',
          color: LG, fontWeight: 600, marginTop: '4px',
        }}>
          {p.tag}
        </span>
      </div>

      <h3 style={{ fontSize: '15.5px', fontWeight: 700, color: BLK }}>{p.name}</h3>

      <p style={{ fontSize: '12.5px', color: GRAY, lineHeight: 1.68, flexGrow: 1 }}>
        {p.desc}
      </p>

      <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
        {['LIVE', 'REPO'].map(btn => (
          <button
            key={btn}
            style={{
              flex: 1, padding: '9px 0',
              border: `1.5px solid ${BLK}`,
              backgroundColor: 'transparent', cursor: 'pointer',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em',
              fontFamily: 'inherit', color: BLK,
              transition: 'background 0.15s, color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = BLK; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = BLK }}
          >
            {btn}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Corner bracket helper ───────────────────────────────────────────────── */
function Brackets({ size = 22, thickness = 3, color = RED }) {
  const s = { position: 'absolute', width: size, height: size, zIndex: 2 }
  const b = `${thickness}px solid ${color}`
  return (
    <>
      <div style={{ ...s, top: 0, left: 0,  borderTop: b,    borderLeft: b  }} />
      <div style={{ ...s, top: 0, right: 0, borderTop: b,    borderRight: b }} />
      <div style={{ ...s, bottom: 0, left: 0,  borderBottom: b, borderLeft: b  }} />
      <div style={{ ...s, bottom: 0, right: 0, borderBottom: b, borderRight: b }} />
    </>
  )
}

/* ─── Main page ───────────────────────────────────────────────────────────── */
export default function ArchitectPortfolioPage() {
  const [nav, setNav] = useState('ME')
  const heroRef = useRef(null)
  const workRef = useRef(null)
  const specsRef = useRef(null)

  const scrollToSection = (section) => {
    setNav(section)

    const map = {
      ME: heroRef,
      WORK: workRef,
      SPECS: specsRef,
    }

    map[section]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
    useEffect(() => {
    const sections = [
      { key: 'ME', ref: heroRef },
      { key: 'WORK', ref: workRef },
      { key: 'SPECS', ref: specsRef },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections.length > 0) {
          const active = sections.find(
            (section) => section.ref.current === visibleSections[0].target
          )

          if (active) {
            setNav(active.key)
          }
        }
      },
      {
        threshold: [0.25, 0.4, 0.6],
        rootMargin: '-90px 0px -45% 0px',
      }
    )

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current)
    })

    return () => observer.disconnect()
  }, [])
    
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: BG,
      color: BLK,
      fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif",
    }}>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav style={{    position: 'sticky', top: 0, zIndex: 1000, backgroundColor: BG, borderBottom: `1px solid ${BDR}` }}>
        <div style={{
          maxWidth: '1080px', margin: '0 auto', padding: '0 40px',
          height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontWeight: 800, fontSize: '16px', letterSpacing: '-0.01em' }}>
            Konstantino's Portfolio
          </span>

          <div style={{ display: 'flex', gap: '28px' }}>
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em',
                  color: nav === item ? RED : BLK,
                  borderBottom: `2px solid ${nav === item ? RED : 'transparent'}`,
                  paddingBottom: '2px',
                  transition: 'color 0.15s',
                  fontFamily: 'inherit',
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <button style={{
            backgroundColor: RED, color: '#fff', border: 'none',
            padding: '9px 22px', fontWeight: 700, fontSize: '13px',
            letterSpacing: '0.07em', cursor: 'pointer',
            borderRadius: '3px', fontFamily: 'inherit',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            HIRE ME
          </button>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '80px 40px 96px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 460px',
            gap: '48px',
            alignItems: 'start',
          }}>

            {/* Left */}
            <div>
              {/* Status badge */}
              <motion.div
                {...rv(0)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  backgroundColor: '#fff', border: `1px solid ${BDR}`,
                  borderRadius: '100px', padding: '5px 13px',
                  fontSize: '11px', letterSpacing: '0.1em',
                  fontWeight: 600, color: '#444',
                  marginBottom: '28px',
                }}
              >
                <div style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 5px rgba(34,197,94,0.7)',
                }} />
                SYSTEMS ONLINE
              </motion.div>

              {/* Name */}
              <motion.div {...rv(0.05)} style={{ marginBottom: '22px', lineHeight: 0.88 }}>
                <div style={{
                  fontSize: 'clamp(62px, 7.2vw, 92px)',
                  fontWeight: 900, letterSpacing: '-0.04em', color: BLK,
                }}>
                  Konstantinos
                </div>
                <div style={{
                  fontSize: 'clamp(62px, 7.2vw, 92px)',
                  fontWeight: 900, letterSpacing: '-0.04em', color: RED,
                }}>
                  Bousinis
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                {...rv(0.1)}
                style={{
                  fontSize: '15px', color: GRAY, lineHeight: 1.72,
                  maxWidth: '370px', marginBottom: '36px',
                }}
              >
                Software Engineer working on Salesforce environment, Integrating Systems, design AI solutions.
              </motion.p>

              {/* Terminal */}
              <motion.div {...rv(0.15)}>
                <CodeTerminal />
              </motion.div>
            </div>

            {/* Right – portrait + floating icons */}
            <motion.div {...rv(0.08)} style={{ paddingTop: '8px' }}>
              <div style={{ position: 'relative', width: '420px' }}>
                <div style={{ position: 'relative', width: '270px' }}>
                  <Brackets />
                  <div style={{ width: '270px', height: '310px', overflow: 'visible' }}>
                    <Portrait />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── RULE ─────────────────────────────────────────────────────────── */}
      <div style={{ borderTop: `1px solid ${BDR}` }} />

      {/* ── PROJECT VAULT ────────────────────────────────────────────────── */}
      <section ref={workRef}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '80px 40px' }}>      
          {/* Section header */}
          <div style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', marginBottom: '44px',
          }}>
            <div>
              <motion.h2 {...rv(0)} style={{
                fontSize: '26px', fontWeight: 800,
                letterSpacing: '-0.01em', textTransform: 'uppercase',
              }}>
                Project Vault
              </motion.h2>
              <motion.div {...rv(0.05)} style={{
                width: '44px', height: '3px',
                backgroundColor: RED, marginTop: '8px',
              }} />
            </div>
            <motion.span {...rv(0.1)} style={{
              fontSize: '11px', letterSpacing: '0.15em',
              color: LG, fontWeight: 500, paddingBottom: '4px',
            }}>
              SELECTED OPERATIONS [03]
            </motion.span>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.name} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── RULE ─────────────────────────────────────────────────────────── */}
      <div style={{ borderTop: `1px solid ${BDR}` }} />

      {/* ── TECHNICAL SPECS ──────────────────────────────────────────────── */}
      <section ref={specsRef}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '80px 40px 90px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '60px', alignItems: 'start' }}>

            {/* Left */}
            <div>
              <motion.h2 {...rv(0)} style={{
                fontSize: '26px', fontWeight: 800,
                letterSpacing: '-0.01em', textTransform: 'uppercase',
              }}>
                Technical Specs
              </motion.h2>
              <motion.div {...rv(0.04)} style={{
                width: '44px', height: '3px',
                backgroundColor: RED, marginTop: '8px', marginBottom: '20px',
              }} />
              <motion.p {...rv(0.08)} style={{
                fontSize: '14px', color: GRAY, lineHeight: 1.7,
                maxWidth: '360px', marginBottom: '38px',
              }}>
                Forging resilient digital infrastructure with a modern stack designed
                for scalability and developer experience.
              </motion.p>

              {/* Tech icon grid 3 × 2 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px 20px' }}>
                {TECH.map((t, i) => (
                  <motion.div
                    key={t.label}
                    {...rv(0.1 + i * 0.05)}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
                  >
                    <div style={{
                      width: '52px', height: '52px',
                      backgroundColor: t.bg,
                      borderRadius: '8px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontWeight: 800, fontSize: '14px',
                      letterSpacing: '-0.01em',
                    }}>
                      {t.lt}
                    </div>
                    <span style={{
                      fontSize: '9px', letterSpacing: '0.1em',
                      color: LG, textTransform: 'uppercase', fontWeight: 500,
                    }}>
                      {t.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right – quote card */}
            <motion.div
              {...rv(0.12)}
              style={{
                backgroundColor: RED,
                borderRadius: '14px',
                padding: '32px 28px',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Decorative quote mark */}
              <div style={{
                position: 'absolute', right: '14px', top: '8px',
                fontSize: '90px', fontWeight: 900,
                color: 'rgba(255,255,255,0.11)',
                lineHeight: 1, fontFamily: 'Georgia, serif',
                userSelect: 'none', pointerEvents: 'none',
              }}>
                "
              </div>

              <p style={{
                fontSize: '20px', fontWeight: 700, color: '#fff',
                lineHeight: 1.42, marginBottom: '24px', position: 'relative',
              }}>
                "I believe that digital spaces should be as{' '}
                <span style={{ fontWeight: 900 }}>REFINED</span>
                {' '}as they are{' '}
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#fff', color: RED,
                  padding: '1px 7px', fontWeight: 900,
                }}>
                  FUNCTIONAL.
                </span>
                "
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '28px', height: '2px', backgroundColor: 'rgba(255,255,255,0.55)' }} />
                <span style={{
                  fontSize: '10px', letterSpacing: '0.18em',
                  color: 'rgba(255,255,255,0.78)', fontWeight: 600,
                }}>
                  CREATIVE MOTTO — 04
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${BDR}`, backgroundColor: BG }}>
        <div style={{
          maxWidth: '1080px', margin: '0 auto', padding: '18px 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <span style={{
            fontSize: '10px', letterSpacing: '0.07em',
            color: LG, textTransform: 'uppercase',
          }}>
            © 2024 Alex Obsidian — Crafted with Precise Intent.
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            {[
              { label: 'READY_FOR_HIRE', green: true },
              { label: 'TERMINAL'  },
              { label: 'SOURCE'    },
              { label: 'PRIVACY'   },
            ].map(({ label, green }) => (
              <span
                key={label}
                style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  fontSize: '10px', letterSpacing: '0.08em',
                  color: green ? '#22c55e' : LG,
                  fontWeight: green ? 600 : 400,
                  textTransform: 'uppercase', cursor: 'pointer',
                }}
              >
                {green && (
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    backgroundColor: '#22c55e', display: 'inline-block',
                    boxShadow: '0 0 5px rgba(34,197,94,0.8)',
                  }} />
                )}
                {label}
              </span>
            ))}

            {/* Platform icon dots */}
            <div style={{ display: 'flex', gap: '6px', marginLeft: '4px' }}>
              {[BLK, '#0ea5e9', RED].map((c, i) => (
                <div key={i} style={{
                  width: '20px', height: '20px', borderRadius: '4px',
                  backgroundColor: c, cursor: 'pointer',
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
