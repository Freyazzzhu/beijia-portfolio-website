import { projectsIntro } from '../data/portfolio.js';

export default function Projects({ projects, onOpenProject }) {
  const [featured, ...supporting] = projects;

  return (
    <section id="projects" className="section-shell">
      <div className="mb-12 max-w-3xl">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">{projectsIntro.title}</h2>
        <p className="mt-6 text-lg leading-8 text-[#53677f]">{projectsIntro.overview}</p>
      </div>

      <article className="project-card featured-project">
        <button className="project-image-button" onClick={() => onOpenProject(featured)} aria-label="View HeartLine project">
          <img src={featured.images.hero} alt={`${featured.title} project hero`} className="project-image" />
        </button>
        <div className="project-copy">
          <p className="section-kicker">Featured Project</p>
          <h3>{featured.title}</h3>
          <p className="project-type">{featured.type}</p>
          <p className="project-overview">{featured.overview}</p>
          <KeywordList keywords={featured.keywords} />
          <button className="text-link" onClick={() => onOpenProject(featured)}>
            View project
          </button>
        </div>
      </article>

      <div className="mt-7 grid gap-7 lg:grid-cols-2">
        {supporting.map((project) => (
          <article key={project.id} className="project-card support-project">
            <button className="project-image-button" onClick={() => onOpenProject(project)} aria-label={`View ${project.title} project`}>
              <img src={project.images.hero} alt={`${project.title} project hero`} className="project-image" />
            </button>
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p className="project-type">{project.type}</p>
              <p className="project-overview">{project.overview}</p>
              <KeywordList keywords={project.keywords.slice(0, 4)} />
              <button className="text-link" onClick={() => onOpenProject(project)}>
                View project
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function KeywordList({ keywords }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {keywords.map((keyword) => (
        <span key={keyword} className="keyword-pill">
          {keyword}
        </span>
      ))}
    </div>
  );
}
