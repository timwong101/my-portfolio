import {
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

const featuredProject = {
  title: 'AI Infrastructure Research Terminal',
  description:
    'Evidence-grounded research terminal that turns SEC filings and investor-relations material into cited analysis, auditable evidence, and point-in-time research.',
  tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Redis', 'BullMQ'],
  url: 'https://github.com/timwong101/ai-infra-terminal',
  image: '/ai-infrastructure-terminal.png',
};

const projectCaseStudy = [
  {
    title: 'Problem',
    description:
      'AI infrastructure research is scattered across SEC filings and investor-relations material. Generic chat tools can summarize it, but rarely prove which evidence supports each claim or what was knowable at a selected point in time.',
  },
  {
    title: 'Architecture',
    description:
      'A modular TypeScript monolith keeps deployment practical while separating ingestion, retrieval, verification, and replay. PostgreSQL stores research and operations data, Redis and BullMQ run durable jobs, and S3-compatible storage preserves checksum-addressed source artifacts.',
  },
  {
    title: 'Grounding controls',
    description:
      'Retrieval is limited to analyst-accepted evidence above a quality floor. Citations are company-scoped, unsupported claims are removed, exact evidence packets are frozen, and evidence changes mark affected research stale.',
  },
  {
    title: 'Quality gates',
    description:
      'Real SEC and IR documents form parser benchmarks with controlled promotion thresholds. Node and Playwright tests, versioned regression cases, numeric-fidelity checks, contradiction detection, and temporal-leakage diagnostics keep failures reviewable.',
  },
  {
    title: 'Tradeoffs',
    description:
      'Interactive work uses BullMQ for retry and restart durability. Scheduled GitHub Actions run the bounded stage graph directly, avoiding a queue topology that would add complexity without recovery across short-lived runners.',
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
    items: ['AWS', 'Docker', 'Kubernetes', 'Kafka'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'GitHub Copilot', 'Codex', 'Postman', 'Splunk', 'Figma'],
  },
];

const experienceHighlights = [
  'Modernized authentication with centralized credential management, MFA, and OAuth-aligned flows.',
  'Built Kafka event processing that cut production issue diagnosis time by more than 75%.',
  'Developed an internal AI agent that reduced manual GitHub repository work by 90%.',
  'Modernized client-facing retirement applications with Angular interfaces and .NET Web APIs.',
  'Supported production systems and expanded automated QA coverage with Java and Gherkin.',
];

function App() {
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
            alt="Abstract black-and-white portrait"
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
              I’m Tim, a full stack software engineer who works across frontend, backend, data, and
              infrastructure.
            </p>
            <div>
              <p>
                Most of my professional work has been in financial services, where I’ve
                modernized authentication, built APIs and event-driven services, and improved
                production support tooling.
              </p>
              <p>
                Outside of work, I build projects that let me explore AI, data-heavy products,
                and thoughtful interface design.
              </p>
            </div>
          </div>
        </section>

        <section className="work-section ruled-section" id="projects" aria-labelledby="work-title">
          <div className="section-heading">
            <div><h2 className="section-title" id="work-title">Projects</h2></div>
          </div>
          <div className="project-grid">
            <article className="project-card featured-project">
              <div className="project-visual">
                <img
                  src={featuredProject.image}
                  alt="AI Infrastructure Research Terminal comparison memo"
                />
              </div>
              <div className="project-copy">
                <h3>{featuredProject.title}</h3>
                <p className="project-description">{featuredProject.description}</p>
                <ul className="project-tags">
                  {featuredProject.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-actions">
                  <a href={featuredProject.url} target="_blank" rel="noreferrer">
                    <Github size={16} /> View source <ArrowUpRight size={15} />
                  </a>
                </div>
                <details className="project-details">
                  <summary>
                    <span>Engineering details</span>
                    <span className="details-toggle" aria-hidden="true">+</span>
                  </summary>
                  <div className="case-study-grid">
                    {projectCaseStudy.map(({ title, description }) => (
                      <section key={title}>
                        <h4>{title}</h4>
                        <p>{description}</p>
                      </section>
                    ))}
                  </div>
                </details>
              </div>
            </article>
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
                <p className="meta">Charles Schwab · 2021 - Present</p>
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
