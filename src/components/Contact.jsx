import { contact } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="contact-panel">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Contact</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#53677f]">{contact.statement}</p>
          <a className="cv-button mt-8" href={contact.cv} download>
            Download CV
          </a>
        </div>
        <div className="contact-list">
          <ContactLink label="Email" href={`mailto:${contact.email}`} value={contact.email} />
          <ContactLink label="LinkedIn" href={contact.linkedin} value="linkedin.com/in/beijia-zhu-a496a838a" />
          <div className="contact-item">
            <span>Location</span>
            <strong>{contact.location}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ label, href, value }) {
  return (
    <a className="contact-item" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
      <span>{label}</span>
      <strong>{value}</strong>
    </a>
  );
}
