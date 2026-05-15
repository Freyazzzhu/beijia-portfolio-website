import { useEffect, useMemo, useState } from 'react';
import { about, contact, home, projects, projectsIntro, skills } from './data/portfolio.js';
import './index.css';
import flowerDoodle from './assets/collage/flower.png';
import heartDoodle from './assets/collage/heart-sticker.png';
import lineDoodle from './assets/collage/line-sticker-1.png';
import starDoodle from './assets/collage/star-sticker.png';

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="dream-site">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects onOpenProject={setActiveProject} />
        <Skills />
        <Contact />
      </main>
      <Footer />
      {activeProject && <ProjectDrawer project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`floating-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#home" className="brand-mark">
        Freya
      </a>
      <nav>
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <HeroDecorations />
      <div className="hero-intro card-fade" style={{ '--delay': '0.4s' }}>
        <p>{home.intro}</p>
      </div>
      <div className="name-card collage-card card-fade" style={{ '--delay': '0.1s' }}>
        <h1>{home.preferredName}</h1>
        <span>{home.name}</span>
      </div>
      <div className="role-note card-fade" style={{ '--delay': '0.2s' }}>
        {home.title}
      </div>
      <div className="welcome-note card-fade" style={{ '--delay': '0.3s' }}>
        welcome to my little world ✦
      </div>
      <div className="hero-copy">
        <p className="kicker">Personal Portfolio</p>
      </div>
      <figure className="portrait-collage card-fade" style={{ '--delay': '0s' }}>
        <span className="photo-tape" />
        <img src={home.portrait} alt="Portrait of Beijia Zhu" />
      </figure>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell about-section">
      <div className="section-heading">
        <p className="kicker">About</p>
        <h2>{about.title}</h2>
      </div>
      <div className="letter-card">
        <h3>Dear visitor,</h3>
        <article className="paper-note large-note">
          <p>{about.body}</p>
        </article>
        <InfoCard title="Education" items={about.education} />
        <InfoCard title="Research Interests" items={about.researchInterests} />
        <article className="paper-note direction-note">
          <p>{about.direction}</p>
        </article>
        <svg className="wave-divider" viewBox="0 0 1200 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 48 C120 10 230 84 360 44 C520 -6 620 92 780 42 C940 -8 1040 80 1200 34 V90 H0 Z" />
        </svg>
      </div>
    </section>
  );
}

function InfoCard({ title, items }) {
  return (
    <article className="paper-note small-note">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function Projects({ onOpenProject }) {
  const projectTypes = ['Interaction Design / UX', 'UX Design / Digital Health', 'Experience Design'];
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState('next');

  const goToPage = (nextPage) => {
    setPage((currentPage) => {
      if (nextPage === currentPage) return currentPage;
      setDirection(nextPage > currentPage ? 'next' : 'prev');
      return nextPage;
    });
  };

  const goNext = () => {
    setPage((currentPage) => {
      if (currentPage >= projects.length - 1) return currentPage;
      setDirection('next');
      return currentPage + 1;
    });
  };

  const goPrev = () => {
    setPage((currentPage) => {
      if (currentPage <= 0) return currentPage;
      setDirection('prev');
      return currentPage - 1;
    });
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrev();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const turningPages = useMemo(
    () =>
      projects.map((project, index) => ({
        project,
        type: projectTypes[index],
      })),
    [],
  );
  const getPageZ = (index) => {
    if (direction === 'next' && index === page - 1) return projects.length + 2;
    if (direction === 'prev' && index === page) return projects.length + 2;
    return projects.length - Math.abs(index - page);
  };

  return (
    <section id="projects" className="section-shell projects-section">
      <div className="section-heading">
        <p className="kicker">Projects</p>
        <h2>{projectsIntro.title}</h2>
        <p>{projectsIntro.overview}</p>
      </div>

      <div className={`diary-book ${direction === 'next' ? 'turn-next' : 'turn-prev'}`}>
        <button type="button" className="book-arrow book-arrow-left" onClick={goPrev} disabled={page === 0} aria-label="Previous project">
          ‹
        </button>
        <div className="book-stage">
          <div className="book-spine" />
          {turningPages.map(({ project, type }, index) => (
            <article
              key={project.id}
              className={`book-page ${index === page ? 'active' : ''} ${
                index < page ? 'flipped' : ''
              } ${index > page ? 'waiting' : ''}`}
              style={{ '--z': getPageZ(index) }}
            >
              <div className="page-face">
                <header>
                  <span>{String(index + 1).padStart(2, '0')} / 03</span>
                  <em>{type}</em>
                </header>
                <button onClick={() => onOpenProject(project)} aria-label={`Open ${project.title}`}>
                  <img src={project.images.hero} alt={`${project.title} preview`} />
                </button>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.overview}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button type="button" className="book-arrow book-arrow-right" onClick={goNext} disabled={page === projects.length - 1} aria-label="Next project">
          ›
        </button>
        <div className="page-dots" aria-label="Project page indicator">
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.id}
              className={index === page ? 'active' : ''}
              onClick={() => goToPage(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell skills-section">
      <div className="section-heading">
        <p className="kicker">Skills</p>
        <h2>Skills & Tools</h2>
        <p>My skills combine interaction design, research, prototyping, and visual communication across design and psychology contexts.</p>
      </div>
      <div className="skill-scroll">
        {skills.map((skill) => (
          <article key={skill.title} className="skill-panel">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div>
              {skill.items.map((item) => (
                <em key={item}>{item}</em>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <div className="contact-card">
        <p className="kicker">Contact</p>
        <h2>let's create something beautiful together</h2>
        <p>{contact.statement}</p>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>{contact.location}</span>
          <a href={contact.cv} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectDrawer({ project, onClose }) {
  return (
    <div className="project-drawer" role="dialog" aria-modal="true">
      <button className="drawer-scrim" onClick={onClose} aria-label="Close project" />
      <article>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <p className="kicker">Project</p>
        <h2>{project.title}</h2>
        <p className="project-type">{project.type}</p>
        <img src={project.images.hero} alt={`${project.title} hero`} />
        <section>
          <h3>Design Challenge</h3>
          <p>{project.challenge}</p>
        </section>
        <section>
          <h3>Description</h3>
          <p>{project.description}</p>
        </section>
        <section>
          <h3>Process</h3>
          <ul>
            {project.process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Outcome</h3>
          <p>{project.outcome}</p>
        </section>
      </article>
    </div>
  );
}

function HeroDecorations() {
  const decorations = [
    ['doodle doodle-line', lineDoodle, ''],
    ['doodle doodle-heart', heartDoodle, ''],
    ['doodle doodle-star', starDoodle, ''],
    ['doodle doodle-flower', flowerDoodle, ''],
  ];

  return (
    <div className="hero-decorations" aria-hidden="true">
      {decorations.map(([className, src, alt]) => (
        <img key={className} className={className} src={src} alt={alt} />
      ))}
    </div>
  );
}

function Footer() {
  return <footer>Beijia Zhu · Interaction Designer & Design Researcher</footer>;
}
