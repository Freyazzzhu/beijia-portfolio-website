import { useMemo, useState } from 'react';
import './index.css';
import { about, contact, home, projects, projectsIntro, skills } from './data/portfolio.js';

const base = import.meta.env.BASE_URL;

const hotspots = [
  {
    id: 'experience',
    label: 'Experience',
    page: 'experience',
    style: { left: '17%', top: '59%', width: '22%', height: '27%' },
  },
  {
    id: 'about',
    label: 'About Me',
    page: 'about',
    style: { left: '39%', top: '55%', width: '30%', height: '30%' },
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    page: 'portfolio',
    style: { left: '13%', top: '10%', width: '29%', height: '29%' },
  },
  {
    id: 'contact',
    label: 'Contact',
    page: 'contact',
    style: { left: '69%', top: '23%', width: '20%', height: '40%' },
  },
];

const timeline = [
  {
    period: 'Current Study',
    title: about.education[0],
    detail: about.direction,
  },
  {
    period: 'Previous Study',
    title: about.education[1],
    detail:
      'A psychology foundation in human behaviour, emotion, perception, research methods, and behavioural understanding.',
  },
  {
    period: 'Research Interests',
    title: 'Human-centred technologies and design research',
    detail: about.researchInterests.join(' / '),
  },
];

function createParticles() {
  return Array.from({ length: 46 }, (_, index) => {
    const isGold = index % 3 === 0;
    return {
      id: index,
      left: `${(index * 17) % 101}%`,
      delay: `${(index % 12) * -1.3}s`,
      duration: `${9 + (index % 9)}s`,
      size: `${2 + (index % 4)}px`,
      color: isGold ? 'rgba(201, 168, 76, 0.82)' : 'rgba(86, 153, 218, 0.7)',
    };
  });
}

export default function App() {
  const [page, setPage] = useState('room');
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const particles = useMemo(createParticles, []);

  const updateMouse = (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    setMouse({ x, y });
  };

  return (
    <main className="min-h-screen bg-[#060e1f] text-[#e8dcc8]">
      {page === 'room' ? (
        <RoomPage mouse={mouse} particles={particles} onMouseMove={updateMouse} onNavigate={setPage} />
      ) : (
        <SectionPage page={page} onBack={() => setPage('room')} />
      )}
    </main>
  );
}

function RoomPage({ mouse, particles, onMouseMove, onNavigate }) {
  const imageStyle = {
    transform: `scale(1.06) translate3d(${mouse.x * -12}px, ${mouse.y * -9}px, 0)`,
  };

  return (
    <section className="room-stage page-enter" onMouseMove={onMouseMove}>
      <img src={`${base}room.png`} alt="The Sunken Room" className="room-image" style={imageStyle} />
      <div className="room-vignette" />
      <div className="room-title">
        <p>{home.name}</p>
        <h1>The Sunken Room</h1>
        <span>{home.title}. {home.intro}</span>
      </div>
      <div className="particle-field" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              width: particle.size,
              height: particle.size,
              background: particle.color,
            }}
          />
        ))}
      </div>
      {hotspots.map((hotspot) => (
        <button
          key={hotspot.id}
          className={`hotspot hotspot-${hotspot.id}`}
          style={hotspot.style}
          onClick={() => onNavigate(hotspot.page)}
          aria-label={`Open ${hotspot.label}`}
        >
          <span>{hotspot.label}</span>
        </button>
      ))}
    </section>
  );
}

function SectionPage({ page, onBack }) {
  const content = {
    about: <AboutPage />,
    portfolio: <PortfolioPage />,
    experience: <ExperiencePage />,
    contact: <ContactPage />,
  }[page];

  return (
    <section className={`subpage ${page}-page page-enter`}>
      <button className="back-button" onClick={onBack}>
        Return to room
      </button>
      {content}
    </section>
  );
}

function AboutPage() {
  return (
    <div className="letter-panel slide-up">
      <p className="eyebrow">From the writing desk</p>
      <h2>{home.name}</h2>
      <h3>{home.title}</h3>
      <p>{about.body}</p>
      <p>{about.direction}</p>
      <div className="letter-columns">
        <div>
          <h4>Education</h4>
          {about.education.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div>
          <h4>Research Interests</h4>
          {about.researchInterests.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PortfolioPage() {
  return (
    <div className="content-shell">
      <p className="eyebrow">The gallery wall</p>
      <h2>{projectsIntro.title}</h2>
      <p className="section-intro">{projectsIntro.overview}</p>
      <div className="painting-grid">
        {projects.map((project) => (
          <article key={project.title} className="painting-card">
            <img src={project.images.hero} alt={`${project.title} project visual`} />
            <div>
              <h3>{project.title}</h3>
              <strong>{project.type}</strong>
              <p>{project.overview}</p>
              <ul>
                {project.keywords.slice(0, 4).map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ExperiencePage() {
  return (
    <div className="content-shell warm-shell">
      <p className="eyebrow">By the fireplace</p>
      <h2>Experience</h2>
      <div className="timeline">
        {timeline.map((item) => (
          <article key={item.title} className="timeline-item">
            <span className="flame" />
            <div>
              <time>{item.period}</time>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="skill-archive">
        {skills.map((skill) => (
          <article key={skill.title}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div>
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-shell">
      <p className="eyebrow">Beyond the curtain</p>
      <h2>Contact</h2>
      <p className="section-intro">{contact.statement}</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input type="text" name="name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" rows="5" />
        </label>
        <button type="submit">Send message</button>
      </form>
      <div className="contact-details">
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
  );
}
