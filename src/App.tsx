import {
  ArrowUp,
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
    caseStudy: [
      {
        title: 'Problem',
        description:
          'Research on AI infrastructure is spread across SEC filings and investor materials. General chat tools can summarize those sources, but they often make it difficult to trace a claim back to the evidence or understand what was known at a specific time.',
      },
      {
        title: 'Architecture',
        description:
          'I kept the system as a modular TypeScript application so it would be straightforward to deploy and maintain. PostgreSQL stores research and job data, Redis and BullMQ handle background work, and S3 compatible storage keeps the original source files by checksum.',
      },
      {
        title: 'Grounding controls',
        description:
          'The system only uses evidence that has passed review and meets a quality threshold. Citations are limited to the correct company, unsupported claims are removed, and saved research is marked stale when its evidence changes.',
      },
      {
        title: 'Quality gates',
        description:
          'Real SEC filings and investor documents serve as parser benchmarks. Node and Playwright tests cover regressions, numeric accuracy, contradictions, and information that falls outside the selected time period.',
      },
      {
        title: 'Tradeoffs',
        description:
          'Interactive jobs run through BullMQ so they can be retried after a failure. Scheduled GitHub Actions run the same workflow directly because adding a queue to a temporary runner would add complexity without improving recovery.',
      },
    ],
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
    caseStudy: [
      {
        title: 'Problem',
        description:
          'Most contrast tools compare two solid colors or check one point in a gradient. That can miss a small area behind the text where contrast fails, so GradientGuard checks the full rectangular text area.',
      },
      {
        title: 'Contrast analysis',
        description:
          'The gradient is rendered to a canvas that accounts for device pixel ratio. The app samples pixels beneath the text and reports the lowest contrast ratio, where it occurs, how much of the area passes, and the estimated WCAG 2.2 AA result.',
      },
      {
        title: 'Architecture',
        description:
          'React useReducer manages editor state and undo history. Separate modules handle color math, gradient interpolation, contrast thresholds, correction logic, and URL sharing.',
      },
      {
        title: 'Correction strategy',
        description:
          'The app checks black and white text first. If neither passes everywhere, it uses a binary search to find the lowest scrim opacity that makes every sampled point pass.',
      },
      {
        title: 'Quality gates',
        description:
          'Unit tests cover luminance, contrast ratios, text size thresholds, gradient interpolation, correction logic, URL validation, and undo history. Playwright tests the complete flow from editing a gradient through exporting the result.',
      },
    ],
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
  const activeProject = projects.find((project) => project.title === expandedProject);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Timothy Wong, home">
          <span>Tim Wong</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <figure className="hero-banner">
          <img
            src="/abstract-portrait.png"
            alt="Abstract black and white portrait"
            width="1586"
            height="992"
            fetchPriority="high"
          />
        </figure>

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
                I enjoy taking projects from the initial idea through production and turning
                complex problems into software people can actually use.
              </p>
              <p>
                I’m curious by nature and especially interested in how AI can improve both
                technical work and everyday life.
              </p>
            </div>
          </div>
        </section>

        <section className="work-section ruled-section" id="projects" aria-labelledby="work-title">
          <div className="section-heading">
            <div><h2 className="section-title" id="work-title">Projects</h2></div>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
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
                    aria-controls="project-engineering-details"
                    aria-expanded={expandedProject === project.title}
                    onClick={() => setExpandedProject((current) => (
                      current === project.title ? null : project.title
                    ))}
                  >
                    <span>Engineering details</span>
                    <span className="details-toggle" aria-hidden="true">+</span>
                  </button>
                </div>
              </article>
            ))}
            {activeProject && (
              <section
                className="project-details-panel"
                id="project-engineering-details"
                aria-labelledby="project-details-title"
              >
                <header>
                  <h3 id="project-details-title">{activeProject.title}</h3>
                  <p>Engineering details</p>
                </header>
                <div className="case-study-grid">
                  {activeProject.caseStudy.map(({ title, description }) => (
                    <section key={title}>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </section>
                  ))}
                </div>
              </section>
            )}
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
          <a href="#top" aria-label="Back to top"><ArrowUp size={18} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
