import { home } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="impression-cloud cloud-one" />
      <div className="impression-cloud cloud-two" />
      <div className="impression-cloud cloud-three" />
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 pb-16 md:grid-cols-[0.94fr_1.06fr] md:px-8 lg:gap-20">
        <div className="relative z-10 fade-in">
          <p className="section-kicker">Personal Portfolio</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-[#2f425a] md:mt-5 md:text-8xl">
            {home.name}
          </h1>
          <p className="mt-3 font-display text-2xl italic text-[#7d91b1] md:mt-4 md:text-4xl">Freya</p>
          <p className="mt-6 max-w-xl text-base font-semibold tracking-wide text-[#53677f] md:mt-8 md:text-xl">
            {home.title}
          </p>
          <p className="mt-5 max-w-2xl text-balance text-lg leading-8 text-[#53677f] md:mt-7 md:text-xl md:leading-9">
            {home.intro}
          </p>
        </div>

        <div className="relative z-10 flex justify-center md:justify-end">
          <figure className="portrait-frame fade-in-delayed">
            <img src={home.portrait} alt="Portrait of Beijia Zhu" className="portrait-image" />
          </figure>
        </div>
      </div>
    </section>
  );
}
