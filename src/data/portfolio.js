import portraitImage from '../assets/portfolio/portrait.JPG';
import heartlineHero from '../assets/portfolio/heartline-hero.png';
import floodSafeHero from '../assets/portfolio/flood-safe-hero.jpg';
import disneyDreamHero from '../assets/portfolio/disney-dream-hero.png';
import cvPdf from '../assets/portfolio/Beijia_Zhu_CV.pdf';

export const home = {
  name: 'Beijia Zhu',
  preferredName: 'Freya',
  title: 'Interaction Designer & Design Researcher',
  intro:
    'I explore how thoughtful interaction design can make technology feel more human, meaningful, and emotionally engaging.',
  portrait: portraitImage,
};

export const about = {
  title: 'About Me',
  body:
    'I am currently studying Master of Interaction Design and Electronic Arts at the University of Sydney, with a background in Psychology from the University of Melbourne. My work sits at the intersection of human-computer interaction, user research, and experience design. I am interested in how thoughtful interaction design can make technology feel more human, accessible, and emotionally meaningful.',
  direction:
    'I am interested in designing interactive experiences that connect people, technology, and everyday life through research, prototyping, and visual storytelling. My current direction focuses on human-centred technologies, meaningful digital experiences, and design research practices.',
  education: [
    'Master of Interaction Design and Electronic Arts, University of Sydney',
    'Bachelor of Science in Psychology, University of Melbourne',
  ],
  researchInterests: [
    'Human-Computer Interaction',
    'Healthcare UX / Digital Health',
    'Immersive and Embodied Interaction',
    'Design Research / Research-through-Design',
  ],
};

export const projectsIntro = {
  title: 'Selected Projects',
  overview:
    'A collection of interaction design, UX, and digital experience projects exploring how technology can shape emotional, practical, and immersive human experiences.',
};

export const projects = [
  {
    id: 'heartline',
    title: 'HeartLine',
    type: 'Speculative Interaction Design / Tangible Interaction / Design Fiction',
    overview:
      'HeartLine reimagines dating-app interaction through a heart-shaped retro landline phone, translating digital swiping into tactile, emotional, and playful physical interaction.',
    challenge:
      'How might we transform fast, screen-based dating interactions into a slower, more physical, and emotionally expressive experience?',
    description:
      'HeartLine is a speculative interaction design project that explores how digital dating behaviours could be reinterpreted through a physical communication object. The project combines the familiarity of a retro landline phone with the interaction logic of contemporary dating apps, using tactile controls, emotional light feedback, and playful sound cues to create a more embodied form of connection.',
    process: [
      'Developed the design fiction concept and interaction scenario',
      'Explored the transformation of swipe-based dating logic into physical interaction',
      'Designed tactile controls including a joystick-style accept/reject gesture',
      'Created emotional feedback through breathing light states, flashes, and sound responses',
      'Produced product visuals, packaging concepts, and advertisement-style presentation materials',
    ],
    outcome:
      'A speculative product concept supported by product visuals, interaction logic, packaging design, and promotional materials. The project demonstrates how tangible interaction and affective feedback can challenge the speed and emotional flatness of screen-based dating experiences.',
    keywords: [
      'Speculative Design',
      'Tangible Interaction',
      'Affective Interaction',
      'Product Interaction',
      'Design Fiction',
    ],
    images: {
      hero: heartlineHero,
      final: [],
      process: [],
    },
    featured: true,
  },
  {
    id: 'flood-safe',
    title: 'Flood Safe',
    type: 'UX Design / Public Safety / Information Design',
    overview:
      'Flood Safe is a UX design project that supports flood preparedness and emergency communication through clear, accessible, and user-centred information design.',
    challenge:
      'How might we help people understand flood risks, prepare before emergencies, and access critical information during high-pressure situations?',
    description:
      'Flood Safe is a user-centred design project focused on improving flood preparedness and emergency communication. The project explores how digital tools can make risk information easier to understand, support timely decision-making, and reduce confusion before and during flood events.',
    process: [
      'Researched user needs and information challenges in emergency contexts',
      'Identified key pain points around preparedness, communication, and decision-making',
      'Developed user flows and information architecture for flood safety support',
      'Designed interface screens and interaction flows',
      'Considered clarity, accessibility, and urgency in visual and information design',
    ],
    outcome:
      'A UX concept that presents flood-related information in a clearer and more accessible way. The project demonstrates practical problem-solving, user-centred design thinking, and the ability to translate complex safety information into understandable digital experiences.',
    keywords: ['UX Design', 'User Research', 'Crisis Communication', 'Information Design', 'Public Safety'],
    images: {
      hero: floodSafeHero,
      final: [],
      process: [],
    },
  },
  {
    id: 'disney-dream',
    title: 'Disney Dream',
    type: 'Digital Transformation Strategy / Immersive Experience / Concept Design',
    overview:
      'Disney Dream is a digital transformation concept that extends theme park experiences beyond physical attendance through VR environments, AI-guided storytelling, virtual worlds, and digital souvenirs.',
    challenge:
      'How might theme park experiences become more accessible, continuous, and personalised beyond the limits of physical attendance?',
    description:
      'Disney Dream is a strategic concept for extending theme park experiences into a digital and immersive service model. The project explores how VR, AI-guided storytelling, virtual worlds, and digital souvenirs could allow audiences to engage with themed experiences from home or between physical visits. It focuses on access, personalisation, and the creation of ongoing relationships between audiences and immersive storyworlds.',
    process: [
      'Analysed limitations of physical theme park attendance, including geography, cost, time, and capacity',
      'Identified a strategic opportunity to extend immersive storyworlds beyond physical visits',
      'Developed a concept combining VR environments, AI guidance, virtual worlds, and digital souvenirs',
      'Created user journey scenarios, interface mockups, and strategic diagrams',
      'Considered business value, user value, and implementation requirements',
    ],
    outcome:
      'A digital transformation strategy and immersive experience concept that proposes a more flexible, scalable, and personalised way to access theme park experiences. The project demonstrates strategic thinking, experience design, and the use of emerging technologies in service innovation.',
    keywords: [
      'Digital Transformation',
      'Immersive Experience',
      'VR Experience',
      'AI-guided Storytelling',
      'Virtual Worlds',
      'Concept Design',
    ],
    note:
      'Presented as a student concept and digital transformation strategy, without official Disney logos or copyrighted character imagery.',
    images: {
      hero: disneyDreamHero,
      final: [],
      process: [],
    },
  },
];

export const skills = [
  {
    title: 'Design & Prototyping',
    description:
      'I use design and prototyping tools to translate ideas into clear visual systems, interaction flows, and interface concepts.',
    items: [
      'Figma',
      'Adobe Photoshop',
      'Adobe Premiere Pro',
      'UI Design',
      'Wireframing',
      'Interaction Flow Design',
      'Visual Communication',
    ],
  },
  {
    title: 'Research & Evaluation',
    description:
      'My research skills are shaped by both design and psychology contexts, supporting user-centred inquiry, evaluation, and behavioural understanding.',
    items: [
      'User Research',
      'Usability Testing',
      'Literature Review',
      'Survey Design',
      'Interview Preparation',
      'Qualitative Analysis',
      'Quantitative Behavioural Research',
    ],
  },
  {
    title: 'Creative Technology',
    description:
      'I explore digital and interactive media through prototyping, basic coding, AI-assisted workflows, and visual storytelling.',
    items: [
      'Basic HTML/CSS/JavaScript',
      'AI-assisted Prototyping',
      'Interactive Media Concepts',
      'Video Editing',
      'Digital Storytelling',
    ],
  },
  {
    title: 'Communication',
    description:
      'I communicate design ideas through academic writing, presentation, bilingual communication, and collaborative project work.',
    items: ['Academic Writing', 'Presentation', 'Bilingual Communication', 'Teamwork', 'Leadership'],
  },
];

export const contact = {
  statement:
    'I am currently interested in research opportunities related to interaction design, human-technology experience, embodied interaction, and design research.',
  email: 'bzhu0389@uni.sydney.edu.au',
  linkedin: 'https://www.linkedin.com/in/beijia-zhu-a496a838a',
  location: 'Sydney, Australia',
  cv: cvPdf,
};
