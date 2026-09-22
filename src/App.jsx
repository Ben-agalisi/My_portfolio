import { useState } from 'react'
import profilePic from './assets/profile.png'
import './App.css'

// Project Data
const projects = [
  {
    id: 'company-website',
    title: 'The Company Website',
    category: 'Full Stack',
    description: 'A robust company web platform built with responsive layout, user authentication, and a dynamic content management system.',
    highlights: [
      'Implemented Secure JWT Authentication & Password Hashing',
      'Integrated MongoDB schemas for scalable dynamic content management',
      'Responsive design across mobile, tablet, and desktop viewports'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/Ben-agalisi/the-company-website-',
  },
  {
    id: 'earthguard-ai',
    title: 'EARTHGUARD AI',
    category: 'AI / ML',
    description: 'An AI-powered Emergency Response System that utilizes machine learning to predict, detect, and respond to illegal mining activities.',
    highlights: [
      'Engineered machine learning models to analyze environmental data inputs',
      'Designed alert system simulation for real-time risk mitigation',
      'Automated spatial data preprocessing pipeline in Python'
    ],
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
    link: 'https://github.com/Ben-agalisi/EARTH-GUARD-AI-SIMULATION'
  },
  {
    id: 'gbcs-system',
    title: 'GBCS Management System',
    category: 'Full Stack',
    description: 'A web-based database application for managing student profiles, grade tracking, and academic administrative records.',
    highlights: [
      'Designed relational MySQL database schemas for data integrity',
      'Created intuitive administrative interfaces for student record workflows',
      'Optimized backend queries for high-performance record retrieval'
    ],
    tech: ['Python', 'HTML/CSS', 'MySQL', 'Web API'],
    link: 'https://github.com/Ben-agalisi/GBCS_Management_System',
  },
]

// Skill Categories
const skillCategories = [
  {
    name: 'Languages',
    skills: ['C++', 'C', 'Python', 'JavaScript (ES6+)']
  },
  {
    name: 'Frontend',
    skills: ['React', 'HTML5 / CSS3', 'Tailwind CSS', 'Responsive Design']
  },
  {
    name: 'Backend & DB',
    skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'REST APIs']
  },
  {
    name: 'Tools & Core',
    skills: ['Git / GitHub', 'Data Structures', 'Algorithms', 'System Logic']
  }
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [copied, setCopied] = useState(false)
  
  // State for your profile image (defaults to imported profilePic)
  const [profileImg, setProfileImg] = useState(profilePic)

  // Recruiter contact details
  const phoneNumber = '+233534579765' 
  const whatsappNumber = '233534579765' 
  const emailAddress = 'benagalisi@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Local browser photo preview updater
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setProfileImg(url)
    }
  }

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo-dot"></span>
          <span className="logo-text">Agalisi Benjamin</span>
        </div>

        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          
          <li className="nav-actions">
            <a href={`tel:${phoneNumber}`} className="nav-btn call-btn">
              📞 Call
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noreferrer" 
              className="nav-btn wa-btn"
            >
              💬 WhatsApp
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-grid">
          {/* Profile Image Column */}
          <div className="hero-img-col">
            <div className="profile-frame">
              {/* === THIS IS WHERE YOUR PICTURE LOADS === */}
              <img 
                src={profileImg} 
                alt="Benjamin Agalisi" 
                className="profile-img" 
              />
              <label className="photo-upload-badge" title="Test custom photo">
                
                <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
              </label>
            </div>
            <div className="status-badge">
              <span className="status-dot"></span> Available for Hire
            </div>
          </div>

          {/* Hero Content Column */}
          <div className="hero-text-col">
            <span className="eyebrow">Computer Engineering Student & Full-Stack Developer</span>
            <h1 className="hero-title">Benjamin Agalisi</h1>
            <p className="hero-tagline">
              Building scalable web systems, data pipelines, and algorithms. High-performance software engineering focused on clean architecture and measurable impact.
            </p>

            {/* Direct Quick Actions */}
            <div className="action-row">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn btn-wa">
                WhatsApp Me
              </a>
              <a href={`tel:${phoneNumber}`} className="btn btn-call">
                Call Direct
              </a>
              <button onClick={handleCopyEmail} className="btn btn-secondary">
                {copied ? '✓ Email Copied' : 'Copy Email'}
              </button>
            </div>

            {/* Recruiter Metrics Bar */}
            <div className="stats-bar">
              <div className="stat-item">
                <span className="stat-value">C++ / React / Python</span>
                <span className="stat-label">Core Tech Stack</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">Final Year Student</span>
                <span className="stat-label">Computer Engineering</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">Immediate</span>
                <span className="stat-label">Open to Roles & Internships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p className="about-text">
            Analytical Computer Engineering student with a strong foundation in high-level computer science fundamentals, algorithm efficiency, and full-stack implementation. Passionate about engineering production-grade web systems and AI-assisted data tools. Experienced with key languages including <strong>C++, React, Node.js, and Python</strong> within collaborative and fast-paced technical environments.
          </p>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div className="skill-card" key={cat.name}>
              <h3 className="skill-cat-title">{cat.name}</h3>
              <div className="skill-pills">
                {cat.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="section">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="filter-buttons">
            {['All', 'Full Stack', 'AI / ML'].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-top">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-highlights">
                <span className="highlights-header">Key Technical Achievements:</span>
                <ul>
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="project-bottom">
                <div className="tech-tags">
                  {project.tech.map((t) => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  View Source Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-card">
          <p className="contact-subtitle">
            Looking for a motivated Software Engineer / Full Stack Developer? Let’s connect!
          </p>

          <div className="contact-grid">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="contact-tile wa-tile">
              <span className="tile-icon">💬</span>
              <div>
                <span className="tile-label">WhatsApp</span>
                <span className="tile-val">Chat directly</span>
              </div>
            </a>

            <a href={`tel:${phoneNumber}`} className="contact-tile phone-tile">
              <span className="tile-icon">📞</span>
              <div>
                <span className="tile-label">Phone</span>
                <span className="tile-val">{phoneNumber}</span>
              </div>
            </a>

            <a href={`mailto:${emailAddress}`} className="contact-tile email-tile">
              <span className="tile-icon">✉️</span>
              <div>
                <span className="tile-label">Email</span>
                <span className="tile-val">{emailAddress}</span>
              </div>
            </a>

            <a href="https://github.com/Ben-agalisi" target="_blank" rel="noreferrer" className="contact-tile github-tile">
              <span className="tile-icon">💻</span>
              <div>
                <span className="tile-label">GitHub</span>
                <span className="tile-val">github.com/Ben-agalisi</span>
              </div>
            </a>

            <a href="https://linkedin.com/in/BenjaminAgalisi" target="_blank" rel="noreferrer" className="contact-tile linkedin-tile">
              <span className="tile-icon">💼</span>
              <div>
                <span className="tile-label">LinkedIn</span>
                <span className="tile-val">Benjamin Agalisi</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Benjamin Agalisi. Built with React.</p>
      </footer>
    </div>
  )
}