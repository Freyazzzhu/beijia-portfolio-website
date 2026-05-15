import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#53677f]/30 px-4 py-8 backdrop-blur-md">
      <button className="absolute inset-0 cursor-default" aria-label="Close project" onClick={onClose} />
      <article className="modal-panel">
        <div className="modal-header">
          <div>
            <p className="section-kicker">Project Detail</p>
            <h2>{project.title}</h2>
            <p>{project.type}</p>
          </div>
          <button className="close-button" onClick={onClose} aria-label="Close modal">
            x
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-copy">
            <DetailBlock title="Design Challenge" text={project.challenge} />
            <DetailBlock title="Project Description" text={project.description} />
            <DetailBlock title="Process" items={project.process} />
            <DetailBlock title="Outcome" text={project.outcome} />
            {project.note && <DetailBlock title="Note" text={project.note} />}
          </div>

          <div className="modal-gallery">
            <img src={project.images.hero} alt={`${project.title} hero`} className="gallery-hero" />
            {[...project.images.final, ...project.images.process].map((image) => (
              <img key={image} src={image} alt={`${project.title} project visual`} className="gallery-image" />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

function DetailBlock({ title, text, items }) {
  return (
    <section className="detail-block">
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      {items && (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
