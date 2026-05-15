import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-shell py-16 md:py-20">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Skills</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#53677f]">
          My skills combine interaction design, research, prototyping, and visual communication
          across design and psychology contexts.
        </p>
      </div>

      <div className="skill-panels">
        {skills.map((skill, index) => (
          <article key={skill.title} className="skill-panel">
            <div className="skill-panel-inner">
              <span className="skill-index">0{index + 1}</span>
              <div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
              <div className="skill-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
