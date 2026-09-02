import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'AI Infrastructure Research',
    description:
      'A research tool that turns SEC filings and investor materials into cited analysis, traceable evidence, and a record of what was known at a given time.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Redis', 'BullMQ'],
    url: 'https://github.com/timwong101/ai-infra-terminal',
    liveUrl: null,
    image: '/ai-infrastructure-terminal.png',
    imageAlt: 'AI Infrastructure Research Terminal comparison memo',
    engineeringSummary:
      'The application uses a modular TypeScript architecture backed by PostgreSQL, with Redis and BullMQ handling background jobs and source files stored by checksum. Grounding rules keep citations tied to reviewed evidence, and automated tests cover parsing, accuracy, contradictions, and time based research.',
  },
  {
    title: 'GradientGuard',
    description:
      'A gradient editor that checks contrast across the entire area behind text and suggests the smallest change needed to make it readable.',
    tags: ['TypeScript', 'React', 'Vite', 'Canvas', 'Playwright'],
    url: 'https://github.com/timwong101/GradientGuard',
    liveUrl: 'https://gradient-guard.vercel.app/',
    image: '/gradientguard-preview.png',
    imageAlt: 'GradientGuard desktop contrast analysis workbench',
    engineeringSummary:
      'GradientGuard uses a canvas based sampling engine to measure contrast across the full area behind text instead of checking a single color. It suggests the smallest accessible adjustment, while unit and Playwright tests cover the calculations and the complete editing workflow.',
  },
];

const techStack = [
  {
    title: 'Languages',
    items: ['TypeScript', 'Python', 'JavaScript', 'C#', 'Java', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['.NET', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'Redis', 'Microsoft SQL Server', 'Oracle Database'],
  },
  {
    title: 'Infrastructure',
    items: ['AWS', 'Vercel', 'Docker', 'Kafka'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'GitHub Copilot', 'Codex', 'Postman', 'Splunk', 'Figma'],
  },
];

const experienceHighlights = [
  'Modernized authentication by centralizing credential management and adding MFA and OAuth flows.',
  'Built a Kafka event processor that cut the time needed to diagnose production issues by more than 75%.',
  'Built an internal AI agent that reduced manual GitHub repository work by 90%.',
  'Updated retirement applications with Angular interfaces and .NET Web APIs.',
  'Supported production systems and expanded automated test coverage with Java and Gherkin.',
];

function App() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Timothy Wong, home">
          <span>TW</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="profile-hero ruled-section" aria-labelledby="profile-name">
          <div className="profile-headshot">
            <img
              src="/tim-headshot.png"
              alt="Abstract portrait of Tim Wong"
              width="1254"
              height="1254"
              fetchPriority="high"
            />
          </div>
          <div className="profile-identity">
            <h1 id="profile-name">Tim Wong</h1>
            <div
              className="profile-ticker"
              aria-label="Software Developer, Engineer, Always Learning"
            >
              <div className="profile-ticker-track" aria-hidden="true">
                <span>Software Developer</span>
                <span>Engineer</span>
                <span>Always Learning</span>
                <span>Software Developer</span>
              </div>
            </div>
            <a className="profile-email" href="mailto:timwong101@gmail.com">
              <Mail size={12} strokeWidth={1.7} aria-hidden="true" />
              Send an Email
            </a>
          </div>
        </section>

        <section className="about-section ruled-section" id="about" aria-labelledby="about-title">
          <div className="about-heading">
            <h2 className="about-label section-title" id="about-title">About</h2>
          </div>
          <div className="about-copy">
            <p className="about-intro">
              I’m Tim, a full stack software engineer.
            </p>
            <div>
              <p>
                I enjoy taking ideas through production and turning complex problems into useful,
                reliable products.
              </p>
              <p>
                I’m especially interested in AI, emerging technology, and their potential to shape
                what comes next.
              </p>
            </div>
          </div>
        </section>

        <section className="work-section ruled-section" id="projects" aria-labelledby="work-title">
          <div className="section-heading">
            <div><h2 className="section-title" id="work-title">Projects</h2></div>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const detailsId = `${project.title.toLowerCase().replaceAll(' ', '-')}-details`;

              return (
                <article className="project-card" key={project.title}>
                  <div className="project-visual">
                    <img src={project.image} alt={project.imageAlt} />
                  </div>
                  <div className="project-copy">
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-tags">
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <div className="project-actions">
                      <a href={project.url} target="_blank" rel="noreferrer">
                        <Github size={16} /> View source <ArrowUpRight size={15} />
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          Live demo <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                    <button
                      className="project-details-trigger"
                      type="button"
                      aria-controls={detailsId}
                      aria-expanded={expandedProject === project.title}
                      onClick={() => setExpandedProject((current) => (
                        current === project.title ? null : project.title
                      ))}
                    >
                      <span>Engineering details</span>
                      <span className="details-toggle" aria-hidden="true">+</span>
                    </button>
                    <section
                      className="project-details-panel"
                      id={detailsId}
                      aria-label={`${project.title} engineering details`}
                      aria-hidden={expandedProject !== project.title}
                    >
                      <div className="project-details-inner">
                        <div className="project-details-content">
                          <p>{project.engineeringSummary}</p>
                        </div>
                      </div>
                    </section>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="experience-section ruled-section" id="experience" aria-labelledby="experience-title">
          <div className="section-label">
            <h2 className="section-title" id="experience-title">Experience</h2>
          </div>
          <div className="experience-content">
            <div className="experience-heading">
              <div className="experience-icon"><BriefcaseBusiness size={21} /></div>
              <div>
                <p className="meta">Charles Schwab · 2021 to Present</p>
                <h3 className="experience-role">Software Engineer</h3>
              </div>
            </div>
            <ul className="experience-highlights">
              {experienceHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        </section>

        <section className="stack-section ruled-section" aria-labelledby="stack-title">
          <div className="section-heading stack-heading">
            <div><h2 className="section-title" id="stack-title">Tech Stack</h2></div>
          </div>
          <div className="stack-grid">
            {techStack.map(({ title, items }) => (
              <article key={title}>
                <h3>{title}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section ruled-section" id="contact" aria-labelledby="contact-title">
          <h2 className="section-title" id="contact-title">Still here?</h2>
          <div className="contact-bottom">
            <p>
              You might be interested in building, collaborating, or just chatting.
            </p>
            <a className="contact-cta" href="mailto:timwong101@gmail.com">
              Let’s talk <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Tim Wong</p>
        <div className="socials">
          <a href="mailto:timwong101@gmail.com" aria-label="Email Timothy Wong"><Mail size={18} /></a>
          <a href="https://github.com/timwong101" target="_blank" rel="noreferrer" aria-label="Timothy Wong on GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/timothywong101/" target="_blank" rel="noreferrer" aria-label="Timothy Wong on LinkedIn"><Linkedin size={18} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
