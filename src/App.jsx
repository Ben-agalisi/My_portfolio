import { useState } from 'react'
import profilePic from './assets/profile.png'
import './App.css'

// 🔴 Replace these with your real projects (title, description, tech, link)
const projects = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/BenAgalisi/project-one',
  },
  {
    title: 'Project Two',
    description: 'Another project description here.',
    tech: ['Python', 'Flask'],
    link: 'https://github.com/BenAgalisi/project-two',
  },
  {
    title: 'Project Three',
    description: 'A third project description here.',
    tech: ['JavaScript', 'CSS'],
    link: 'https://github.com/BenAgalisi/project-three',
  },
]

const skills = ['JavaScript', 'React', 'HTML/CSS', 'Node.js', 'Git', 'Python', 'C++', 'C']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="logo">Agalisi Benjamin</div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      <section id="hero">
        <div className="hero-content">
          <p className="eyebrow">Hello, I'm</p>
          <h1>Benjamin Agalisi</h1>
          <p className="tagline">
            A full stack developer who loves building innovative web applications.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src={profilePic} className="profile-pic" width="220" height="220" alt="Benjamin Agalisi" />
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Analytical Computer Engineering student with a strong foundation in
          programming, data structures, and algorithms. Passionate about developing
          innovative solutions and continuously learning new technologies. Skilled in
          C++, React, Node.js, and Python, with experience building web applications
          and collaborating in team environments.
        </p>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2>Get In Touch</h2>
        <p>Interested in working together? Feel free to reach out.</p>
        <div className="contact-links">
          <a href="mailto:benagalisi@gmail.com">Email</a>
          <a href="https://github.com/BenAgalisi" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/BenjaminAgalisi" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Benjamin Agalisi. Built with React + Vite.</p>
      </footer>
    </>
  )
}

export default App