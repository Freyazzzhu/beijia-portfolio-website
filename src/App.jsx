import { useEffect, useMemo, useRef, useState } from 'react';
import { about, contact, home, projects, projectsIntro, skills } from './data/portfolio.js';
import './index.css';
import flowerDoodle from './assets/collage/flower.png';
import heartDoodle from './assets/collage/heart-sticker.png';
import lineDoodle from './assets/collage/line-sticker-1.png';
import starDoodle from './assets/collage/star-sticker.png';

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
const sectionIds = navItems.map((item) => item.toLowerCase());

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { threshold: 0.55 },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToHash = () => {
      const target = document.querySelector(window.location.hash || '#home');
      window.setTimeout(() => target?.scrollIntoView({ block: 'start', behavior: 'auto' }), 80);
      window.setTimeout(() => target?.scrollIntoView({ block: 'start', behavior: 'auto' }), 320);
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <div className="dream-site">
      <Nav />
      <SectionDots activeSection={activeSection} />
      <main id="page-scroll">
        <Hero />
        <About />
        <Projects onOpenProject={setActiveProject} />
        <Skills />
        <Contact />
      </main>
      {activeProject && <ProjectDrawer project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  );
}

function useRevealSection() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function SectionDots({ activeSection }) {
  return (
    <nav className="section-dots" aria-label="Section navigation">
      {navItems.map((item) => {
        const id = item.toLowerCase();
        return (
          <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''} aria-label={`Go to ${item}`}>
            <span>{item}</span>
          </a>
        );
      })}
    </nav>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollRoot = document.getElementById('page-scroll');
    const onScroll = () => setScrolled((scrollRoot?.scrollTop || window.scrollY) > 24);
    onScroll();
    scrollRoot?.addEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll);
    return () => {
      scrollRoot?.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onScroll);
    };
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
  const revealRef = useRevealSection();

  return (
    <section id="home" ref={revealRef} className="hero-section reveal-section">
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
  const revealRef = useRevealSection();

  return (
    <section id="about" ref={revealRef} className="section-shell about-section reveal-section">
      <div className="section-heading">
        <p className="kicker">About</p>
        <h2>{about.title}</h2>
      </div>
      <div className="letter-card">
        <div className="about-layout">
          <div className="about-left-column">
            <h3>Dear visitor,</h3>
            <article className="paper-note large-note">
              <p>{about.body}</p>
            </article>
          </div>
          <div className="about-right-column">
            <AboutCardStack />
          </div>
        </div>
        <svg className="wave-divider" viewBox="0 0 1200 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 48 C120 10 230 84 360 44 C520 -6 620 92 780 42 C940 -8 1040 80 1200 34 V90 H0 Z" />
        </svg>
      </div>
    </section>
  );
}

function AboutCardStack() {
  const [activeCard, setActiveCard] = useState(0);
  const cards = [
    {
      title: 'Education',
      items: about.education,
      count: '1/2',
      className: 'education-card',
    },
    {
      title: 'Research Interests',
      items: about.researchInterests,
      count: '2/2',
      className: 'research-card',
    },
  ];
  const toggleCard = () => setActiveCard((current) => (current === 0 ? 1 : 0));

  return (
    <div className="about-stack" aria-label="Education and research interests cards">
      {cards.map((card, index) => {
        const isActive = activeCard === index;
        return (
          <button
            type="button"
            key={card.title}
            className={`stack-card ${card.className} ${isActive ? 'is-front' : 'is-back'}`}
            onClick={toggleCard}
          >
            <span className="stack-count">{card.count}</span>
            <h3>{card.title}</h3>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </button>
        );
      })}
    </div>
  );
}

function Projects({ onOpenProject }) {
  const revealRef = useRevealSection();
  const projectTypes = ['Interaction Design / UX', 'UX Design / Digital Health', 'Experience Design'];
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState('next');
  const [lightboxImage, setLightboxImage] = useState(null);

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
      if (event.key === 'Escape') setLightboxImage(null);
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrev();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const activeProject = projects[page];
  const activeType = projectTypes[page];
  const rightPageTiles = useMemo(
    () => [
      { label: 'Process', src: activeProject.images.process[0] || activeProject.images.hero },
      { label: 'Final', src: activeProject.images.final[0] || activeProject.images.hero },
      { label: 'Details', src: activeProject.images.process[1] || activeProject.images.hero },
      { label: 'Outcome', src: activeProject.images.final[1] || activeProject.images.hero },
    ],
    [activeProject],
  );

  return (
    <section id="projects" ref={revealRef} className="section-shell projects-section reveal-section">
      <div className="section-heading">
        <p className="kicker">Projects</p>
        <h2>{projectsIntro.title}</h2>
      </div>

      <div className={`diary-book ${direction === 'next' ? 'turn-next' : 'turn-prev'}`}>
        <button type="button" className="book-arrow book-arrow-left" onClick={goPrev} disabled={page === 0} aria-label="Previous project">
          ‹
        </button>
        <div className="open-book-stage">
          <article key={activeProject.id} className="open-book-spread">
            <div className="book-sheet book-left-page">
              <button
                className="spread-hero"
                onClick={() => setLightboxImage({ src: activeProject.images.hero, alt: `${activeProject.title} hero image` })}
                aria-label={`View ${activeProject.title} hero image`}
              >
                <img src={activeProject.images.hero} alt={`${activeProject.title} preview`} />
                <span className="zoom-hint">⌕</span>
              </button>
              <div className="spread-copy">
                <p>{activeType}</p>
                <h3>{activeProject.title}</h3>
                <span>{activeProject.overview}</span>
              </div>
            </div>
            <div className="book-center-fold" aria-hidden="true" />
            <div className="book-sheet book-right-page">
              <div className="right-page-grid">
                {rightPageTiles.map((tile) => (
                  <figure key={tile.label}>
                    <button
                      type="button"
                      className="album-photo-pop"
                      onClick={() => setLightboxImage({ src: tile.src, alt: `${activeProject.title} ${tile.label.toLowerCase()}` })}
                    >
                      <img src={tile.src} alt={`${activeProject.title} ${tile.label.toLowerCase()}`} />
                    </button>
                    <figcaption>{tile.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </article>
        </div>
        <button type="button" className="book-arrow book-arrow-right" onClick={goNext} disabled={page === projects.length - 1} aria-label="Next project">
          ›
        </button>
        <div className="spread-page-number">
          {String(page + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </div>
      </div>
      {lightboxImage && <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </section>
  );
}

function ImageLightbox({ image, onClose }) {
  return (
    <div className="image-lightbox" role="dialog" aria-modal="true">
      <button className="image-lightbox-backdrop" type="button" onClick={onClose} aria-label="Close image preview" />
      <img src={image.src} alt={image.alt} />
    </div>
  );
}

function Skills() {
  const revealRef = useRevealSection();
  const [activeFolder, setActiveFolder] = useState(0);
  const folderColors = ['#ddeeff', '#fde8ee', '#fef6e0', '#e8f5ee'];

  return (
    <section id="skills" ref={revealRef} className="section-shell skills-section reveal-section">
      <div className="section-heading">
        <p className="kicker">Skills</p>
        <h2>Skills & Tools</h2>
      </div>
      <div className="folder-drawer">
        {skills.map((skill, index) => (
          <article
            key={skill.title}
            className={`skill-folder ${activeFolder === index ? 'is-open' : ''}`}
            style={{ '--folder-color': folderColors[index], '--folder-delay': `${index * 0.1}s` }}
          >
            <button type="button" className="folder-tab" onClick={() => setActiveFolder(index)}>
              {skill.title}
            </button>
            <div className="folder-body">
              <div className="folder-tags">
                {skill.items.map((item, itemIndex) => (
                  <em key={item} style={{ '--tag-delay': `${itemIndex * 0.05}s` }}>
                    {item}
                  </em>
              ))}
            </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const revealRef = useRevealSection();
  const headline = "let's create something beautiful together";

  return (
    <section id="contact" ref={revealRef} className="section-shell contact-section reveal-section">
      <div className="contact-card">
        <p className="kicker">Contact</p>
        <h2>
          {headline.split(' ').map((word, index) => (
            <span key={`${word}-${index}`} style={{ '--word-delay': `${0.18 + index * 0.08}s` }}>
              {word}
            </span>
          ))}
        </h2>
        <p className="contact-location">{contact.location}</p>
        <p>{contact.statement}</p>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={contact.cv} download>
            Download CV
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
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
