import { useEffect, useState } from 'react'
import profilePic from './assets/profile.png'
import './App.css'

const cvFile = '/cv/Benjamin-Agalisi-CV.pdf'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

const typingPhrases = [
  'Hi, I am Benjamin',
  'Full-Stack Developer',
  'Computer Engineering Student',
  'Machine Learning Enthusiast',
]

const skillCategories = [
  { name: 'Languages', skills: ['C++', 'C', 'Python', 'JavaScript'] },
  { name: 'Frontend', skills: ['React', 'HTML5 / CSS3', 'Tailwind CSS', 'Responsive Design'] },
  { name: 'Backend & DB', skills: ['Node.js', 'Django', 'MySQL', 'REST APIs'] },
  { name: 'Tools & Core', skills: ['Git / GitHub', 'Robotics', 'Algorithms', 'System Logic'] },
]

const projects = [
  {
    id: 'company-website',
    title: 'The Company Website',
    category: 'Full Stack',
    description: 'A robust company web platform built with responsive layout, user authentication, and a dynamic content management system.',
    highlights: [
      'Implemented Secure JWT Authentication & Password Hashing',
      'Integrated MongoDB schemas for scalable dynamic content management',
      'Responsive design across mobile, tablet, and desktop viewports',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    path: 'https://github.com/Ben-agalisi/the-company-website-',
  },
  {
    id: 'earthguard-ai',
    title: 'EARTHGUARD AI',
    category: 'AI / ML',
    description: 'An AI-powered Emergency Response System that utilizes machine learning to predict, detect, and respond to illegal mining activities.',
    highlights: [
      'Engineered machine learning models to analyze environmental data inputs',
      'Designed alert system simulation for real-time risk mitigation',
      'Automated spatial data preprocessing pipeline in Python',
    ],
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
    path: 'https://github.com/Ben-agalisi/EARTH-GUARD-AI-SIMULATION',
  },
  {
    id: 'gbcs-system',
    title: 'GBCS Management System',
    category: 'Full Stack',
    description: 'A web-based database application for managing student profiles, grade tracking, and academic administrative records.',
    highlights: [
      'Designed relational MySQL database schemas for data integrity',
      'Created intuitive administrative interfaces for student record workflows',
      'Optimized backend queries for high-performance record retrieval',
    ],
    tech: ['Python', 'HTML/CSS', 'MySQL', 'Web API'],
    path: 'https://github.com/Ben-agalisi/GBCS_Management_System',
  },
]

const projectCategories = ['All', 'Full Stack', 'AI', 'ML']

const certificates = [
  {
    id: 'certificate-1',
    title: 'Software Development Certificate',
    issuer: 'ERA AXIS',
    year: '2026',
    file: '/certificates/certificate-1.pdf',
  },

]

const contactLinks = [
  { label: 'WhatsApp', value: 'Chat directly', href: 'whatsapp', icon: '💬' },
  { label: 'Phone', value: 'phone', href: 'phone', icon: '📞' },
  { label: 'Email', value: 'email', href: 'email', icon: '✉️' },
  { label: 'GitHub', value: 'github.com/Ben-agalisi', href: 'https://github.com/Ben-agalisi', icon: '💻', external: true },
  { label: 'LinkedIn', value: 'Benjamin Agalisi', href: 'https://linkedin.com/in/BenjaminAgalisi', icon: '💼', external: true },
]

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const profileImg = profilePic
  const [menuOpen, setMenuOpen] = useState(false)
  const [typed, setTyped] = useState(() => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? typingPhrases[0] : ''
  ))

  const phoneNumber = '+233534579765'
  const whatsappNumber = '233534579765'
  const emailAddress = 'benagalisi@gmail.com'

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let timeoutId

    const tick = () => {
      const phrase = typingPhrases[phraseIndex]

      if (deleting) {
        charIndex -= 1
        setTyped(phrase.slice(0, charIndex))

        if (charIndex === 0) {
          deleting = false
          phraseIndex = (phraseIndex + 1) % typingPhrases.length
          timeoutId = setTimeout(tick, 400)
          return
        }

        timeoutId = setTimeout(tick, 45)
        return
      }

      charIndex += 1
      setTyped(phrase.slice(0, charIndex))

      if (charIndex === phrase.length) {
        deleting = true
        timeoutId = setTimeout(tick, 1500)
        return
      }

      timeoutId = setTimeout(tick, 90)
    }

    timeoutId = setTimeout(tick, 400)
    return () => clearTimeout(timeoutId)
  }, [])

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => {
      if (activeCategory === 'AI' || activeCategory === 'ML') {
        return project.category === 'AI / ML'
      }
      return project.category === activeCategory
    })

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar-inner">
          <a className="brand" href="#hero" aria-label="Benjamin Agalisi, home">
            <span className="brand-mark">BA</span>
            <span className="brand-name">&lt;Benjamin/&gt;</span>
          </a>
          <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a className="btn btn-primary" href={cvFile} download>Download CV</a>
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      <div className="app-container">
        <div className="top-actions">
          <a href={`tel:${phoneNumber}`} className="btn btn-call">Call Direct</a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn btn-wa">WhatsApp Me</a>
          <a href={`mailto:${emailAddress}`} className="btn btn-secondary">Send Email</a>
        </div>

        <section id="hero" className="hero-section">
          <div className="hero-content">
            <div className="profile-frame">
              <img src="/favicon.svg" alt="BA logo" className="profile-img" />
            </div>
            <h1 className="hero-title">Benjamin Agalisi</h1>
            <p className="eyebrow">Full-Stack Developer &amp; Computer Engineering Student</p>
            <div className="status-badge">
              <span className="status-dot" aria-hidden="true" />
              Available for Hire
            </div>
            <p className="typing-line" aria-label={typingPhrases.join('. ')}>
              <span aria-hidden="true">{typed}</span>
              <span className="typing-cursor" aria-hidden="true" />
            </p>
            <p className="hero-tagline">
              Building scalable web systems, data pipelines, and algorithms. High-performance software engineering focused on clean architecture and measurable impact.
            </p>
            <div className="action-row">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Let’s Connect</a>
              <a href={cvFile} target="_blank" rel="noreferrer" className="btn btn-secondary">Preview CV</a>
            </div>
            <div className="stats-bar">
              <div className="stat-item">
                <span className="stat-value">C++ / React / Python</span>
                <span className="stat-label">Core Tech Stack</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">Immediate</span>
                <span className="stat-label">Open to Roles &amp; Internships</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <header className="section-header">
            <h2 className="section-title">About <span>Me</span></h2>
            <p className="section-subtitle">Get to know the developer behind the code</p>
          </header>
          <div className="about-grid">
            <img src={profileImg} alt="Portrait of Benjamin Agalisi" className="about-portrait" />
            <div className="about-card">
              <h3>A passionate developer who loves to learn &amp; build</h3>
              <p>
                I’m a Computer Engineering student who enjoys turning ideas into working software. I’m passionate about software development and AI, and I focus on building web systems that are reliable, responsive, and easy to use.
              </p>
              <p>
                I’ve worked with <strong>C++, React, Node.js, and Python</strong> in collaborative, fast-paced environments, from full-stack web platforms to machine learning projects like EARTHGUARD AI. I believe in learning by building, and I’m always looking for the next problem to solve.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div className="skill-card" key={category.name}>
                <h3 className="skill-cat-title">{category.name}</h3>
                <div className="skill-pills">
                  {category.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="filter-buttons" aria-label="Filter projects">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-btn${activeCategory === category ? ' active' : ''}`}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.path}>
                <div className="project-top">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>
                <div className="project-highlights">
                  <span className="highlights-header">Key Technical Achievements:</span>
                  <ul>
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
                <div className="project-bottom">
                  <div className="tech-tags">
                    {project.tech.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
                  </div>
                  <a href={project.path} target="_blank" rel="noreferrer" className="project-link">View Source Code →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certificates" className="section">
          <h2 className="section-title">Certificates</h2>
          <div className="cert-grid">
            {certificates.map((certificate) => (
              <article className="cert-card" key={certificate.id}>
                <div>
                  <span className="cert-year">{certificate.year}</span>
                  <h3 className="cert-title">{certificate.title}</h3>
                  <p className="cert-issuer">{certificate.issuer}</p>
                </div>
                <a href={certificate.file} target="_blank" rel="noreferrer" className="project-link">View Certificate →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="cv" className="section">
          <h2 className="section-title">Curriculum Vitae</h2>
          <div className="cv-card">
            <p className="cv-text">View my CV online or download a copy to share with your hiring team.</p>
            <div className="cv-actions">
              <a href={cvFile} target="_blank" rel="noreferrer" className="btn btn-primary">View CV</a>
              <a href={cvFile} download className="btn btn-secondary">Download CV</a>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">Looking for a motivated Software Engineer / Full Stack Developer? Let’s connect!</p>
          <div className="contact-grid">
            {contactLinks.map((contact) => {
              const href = contact.href === 'whatsapp'
                ? `https://wa.me/${whatsappNumber}`
                : contact.href === 'phone'
                  ? `tel:${phoneNumber}`
                  : contact.href === 'email'
                    ? `mailto:${emailAddress}`
                    : contact.href
              const value = contact.value === 'phone'
                ? phoneNumber
                : contact.value === 'email'
                  ? emailAddress
                  : contact.value

              return (
                <a
                  className="contact-tile"
                  href={href}
                  key={contact.label}
                  target={contact.external || contact.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={contact.external || contact.label === 'WhatsApp' ? 'noreferrer' : undefined}
                >
                  <span className="tile-icon" aria-hidden="true">{contact.icon}</span>
                  <span className="tile-copy">
                    <span className="tile-label">{contact.label}</span>
                    <span className="tile-val">{value}</span>
                  </span>
                </a>
              )
            })}
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Benjamin Agalisi. Delivers best services</p>
        </footer>
      </div>
    </>
  )
}
