
import { motion } from "framer-motion";

import {
  Mail,
  ArrowDown,
  Database,
  Code2,
  Download
} from "lucide-react";

import { profile } from "./data/portfolio";
import ParticleBackground from "./ParticleBackground";
import DataGlobe from "./DataGlobe";
import "./App.css";

function App() {
  return (
    <div className="portfolio">

      <ParticleBackground />

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>PRASAD<span>.</span></h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="welcome">
            WELCOME TO MY DIGITAL WORLD
          </p>

          <h1>
            M LAKSHMI
            <br />
            <span>PRASAD</span>
          </h1>

          <h2>{profile.role}</h2>

          <p className="hero-description">
            {profile.tagline}
          </p>

          <p className="description">
            {profile.description}
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              EXPLORE PROJECTS
            </a>

            <a href="/assets/resume.pdf" className="secondary-btn">
              <Download size={17} /> RESUME
            </a>
          </div>
        </motion.div>

        {/* 3D DATA GLOBE */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <DataGlobe />

          <p className="globe-caption">
            DATA • TECHNOLOGY • INSIGHTS
          </p>
        </motion.div>

        <a href="#about" className="scroll-down">
          SCROLL TO EXPLORE <ArrowDown size={16} />
        </a>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">

        <p className="section-label">
          01 / ABOUT ME
        </p>

        <h2>
          Turning Data Into <span>Insights</span>
        </h2>

        <p>
          I am an aspiring Data Analyst currently learning
          data analytics. My interests include data cleaning,
          data exploration, SQL queries, dashboards and
          business intelligence.
        </p>

      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">

        <p className="section-label">
          02 / MY EXPERTISE
        </p>

        <h2>
          Technical <span>Skills</span>
        </h2>

        <div className="skills-grid">

          {profile.skills.map((skill) => (
            <motion.div
              className="skill-card"
              whileHover={{ y: -8, scale: 1.04 }}
              key={skill}
            >
              <Code2 size={25} />
              <h3>{skill}</h3>
            </motion.div>
          ))}

        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">

        <p className="section-label">
          03 / MY WORK
        </p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">

          {profile.projects.map((project, index) => (
            <motion.div
              className="project-card"
              whileHover={{ y: -10 }}
              key={project.title}
            >
              <Database size={35} />

              <p>
                PROJECT 0{index + 1}
              </p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tools">
                {project.tools}
              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section">

        <p className="section-label">
          04 / MY QUALIFICATION
        </p>

        <h2>
          My <span>Education</span>
        </h2>

        <div className="projects-grid">

          <motion.div
            className="project-card"
            whileHover={{ y: -10 }}
          >
            <Database size={35} />

            <p>ACADEMIC QUALIFICATION</p>

            <h3>
              Bachelor of Technology (B.Tech)
            </h3>

            <p>
              Sri Venkatesa Perumal College of Engineering
              and Technology
            </p>

            <div className="tools">
              Graduation Year: 2026
            </div>

          </motion.div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact">

        <p className="section-label">
          05 / CONTACT
        </p>

        <h2>
          Let's Connect <span>.</span>
        </h2>

        <p>
          Interested in data analytics opportunities?
          Let's connect and create something meaningful.
        </p>

        <div className="social-links">

          {/* GITHUB */}
          <a
            href="https://github.com/muddulurulakshmiprasad07"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/lakshmi-prasad-mudduluru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          {/* EMAIL */}
          <a href="mailto:muddulurulakshmiprasad07@gmail.com">
            <Mail size={20} />
            Email
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer>
        © 2026 M Lakshmi Prasad | Data Analyst Portfolio
      </footer>

    </div>
  );
}

export default App;
