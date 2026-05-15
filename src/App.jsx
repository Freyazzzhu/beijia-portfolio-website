import { useMemo, useState } from 'react';
import './index.css';

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

const projects = [
  {
    title: 'HeartLine',
    description:
      'A speculative tangible interaction project translating digital dating gestures into a tactile, affective communication object.',
  },
  {
    title: 'Flood Safe',
    description:
      'A public-safety UX concept for clearer flood preparedness, emergency communication, and decision-making under pressure.',
  },
  {
    title: 'Disney Dream',
    description:
      'An immersive experience strategy exploring VR environments, AI-guided storytelling, and digital souvenirs.',
  },
];

const timeline = [
  {
    period: '2024 - Present',
    title: 'Master of Interaction Design and Electronic Arts',
    detail:
      'Developing interaction design, prototyping, visual communication, and research-through-design practice at the University of Sydney.',
  },
  {
    period: 'Design Research',
    title: 'Human-centred Experience Studies',
    detail:
      'Exploring how embodied interaction, healthcare UX, and emotionally meaningful technology can support everyday life.',
  },
  {
    period: 'Psychology Foundation',
    title: 'Bachelor of Science in Psychology',
    detail:
      'Built a foundation in human behaviour, perception, research methods, and behavioural analysis at the University of Melbourne.',
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
        <p>Beijia Zhu</p>
        <h1>The Sunken Room</h1>
        <span>Explore the submerged study through its remembered objects.</span>
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
      <h2>Beijia Zhu</h2>
      <h3>Interaction Designer & Design Researcher</h3>
      <p>
        I explore how thoughtful interaction design can make technology feel more human,
        meaningful, and emotionally engaging. My work sits between human-computer interaction,
        design research, psychology, and visual storytelling.
      </p>
      <p>
        I am currently studying Master of Interaction Design and Electronic Arts at the University
        of Sydney, with a background in Psychology from the University of Melbourne.
      </p>
    </div>
  );
}

function PortfolioPage() {
  return (
    <div className="content-shell">
      <p className="eyebrow">The gallery wall</p>
      <h2>Portfolio</h2>
      <div className="painting-grid">
        {projects.map((project) => (
          <article key={project.title} className="painting-card">
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
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
        <a href="mailto:bzhu0389@uni.sydney.edu.au">bzhu0389@uni.sydney.edu.au</a>
        <a href="https://www.linkedin.com/in/beijia-zhu-a496a838a" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span>Sydney, Australia</span>
      </div>
    </div>
  );
}
