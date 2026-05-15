import { about } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title">{about.title}</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-[#53677f] md:text-lg">
            <p>{about.body}</p>
            <p>{about.direction}</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <InfoPanel title="Education" items={about.education} />
          <InfoPanel title="Research Interests" items={about.researchInterests} />
        </div>
      </div>
    </section>
  );
}

function InfoPanel({ title, items }) {
  return (
    <article className="soft-card">
      <h3 className="font-display text-3xl font-semibold text-[#34465e]">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-[#53677f] md:text-base">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#aebee0]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
