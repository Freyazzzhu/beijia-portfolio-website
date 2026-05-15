import { researchInterests } from '../data/portfolio.js';

function LineIcon({ type }) {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 text-soft" fill="none" aria-hidden="true">
      {type === 'body' && (
        <>
          <circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M24 15v15M14 22h20M18 40l6-10 6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
      {type === 'affect' && (
        <>
          <path d="M24 38s-14-8-14-19a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 11-14 19-14 19Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 24h5l3-7 4 14 3-7h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
      {type === 'hri' && (
        <>
          <rect x="9" y="15" width="16" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="24" r="1.5" fill="currentColor" />
          <circle cx="22" cy="24" r="1.5" fill="currentColor" />
          <path d="M29 18c5 1 9 5 10 10M29 30c5-1 9-5 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
      {type === 'rtd' && (
        <>
          <path d="M12 14h24M12 24h18M12 34h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M31 29l6 6M37 29l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function ResearchInterests() {
  return (
    <section id="research" className="section-shell border-y border-white/10 bg-panel/45">
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker">Research Interests</p>
        <h2 className="section-title">Questions around bodies, artefacts, emotion, and shared space.</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {researchInterests.map((interest) => (
          <article key={interest.title} className="glass-card group min-h-[270px]">
            <LineIcon type={interest.icon} />
            <h3 className="mt-7 text-2xl font-semibold text-text">{interest.title}</h3>
            <p className="mt-4 text-sm leading-7 text-secondary">{interest.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
