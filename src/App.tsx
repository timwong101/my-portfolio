import {
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

const projects = [
  {
    index: '01',
    title: 'AI Infrastructure Research Terminal',
    description:
      'Evidence-grounded research terminal that turns SEC filings and investor-relations material into cited analysis, auditable evidence, and point-in-time research.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
    url: 'https://github.com/timwong101/ai-infra-terminal',
    image: '/ai-infrastructure-terminal.png',
  },
  {
    index: '02',
    title: 'A technically deep build',
    description:
      'Use this space for a system that demonstrates depth—performance, reliability, distributed data, developer tooling, or infrastructure.',
    tags: ['Systems', 'Tradeoffs', 'Reliability'],
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
            <p className="about-label section-title">About</p>
            <h1 id="about-title">
              I like making complicated software easier to understand, use, and maintain.
            </h1>
          </div>
          <div className="about-copy">
            <p className="about-intro">
              I’m Tim, a software engineer who works across frontend, backend, data, and
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
            {projects.map((project) => (
              <article className="project-card" key={project.index}>
                <div className={`project-visual ${'image' in project ? 'has-image' : ''}`}>
                  {'image' in project ? (
                    <img src={project.image} alt="AI Infrastructure Research Terminal comparison memo" />
                  ) : (
                    <>
                      <span className="project-index">PROJECT / {project.index}</span>
                      <div className="visual-window" aria-hidden="true">
                        <span /><span /><span />
                        <div className="visual-diagram"><i /><i /><i /></div>
                      </div>
                    </>
                  )}
                </div>
                <div className="project-copy">
                  {'image' in project ? null : (
                    <div>
                      <span>{project.index}</span>
                      <ArrowUpRight size={19} aria-hidden="true" />
                    </div>
                  )}
                  <h3 className={'image' in project ? 'project-title-with-link' : undefined}>
                    {'url' in project ? (
                      <a href={project.url} target="_blank" rel="noreferrer">
                        {project.title}
                      </a>
                    ) : project.title}
                    {'url' in project ? (
                      <a
                        className="project-title-arrow"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <ArrowUpRight size={19} />
                      </a>
                    ) : null}
                  </h3>
                  <p>{project.description}</p>
                  <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </article>
            ))}
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
