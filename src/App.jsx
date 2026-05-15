import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import Footer from './components/Footer.jsx';
import { projects } from './data/portfolio.js';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="site-shell min-h-screen overflow-x-hidden text-slate-800 selection:bg-[#c8d9f6] selection:text-[#28384f]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} onOpenProject={setActiveProject} />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
