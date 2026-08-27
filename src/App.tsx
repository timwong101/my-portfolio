import {
  ArrowDownRight,
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
    title: 'Your strongest project',
    description:
      'Lead with a project that shows ownership: the problem, the engineering decisions you made, and the outcome your work created.',
    tags: ['Architecture', 'Product thinking', 'Impact'],
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
    items: ['TypeScript', 'Python', 'JavaScript', 'C#', 'SQL', 'Java'],
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

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Timothy Wong, home">
          <span className="wordmark-mark">TW</span>
          <span>Timothy Wong</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
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

        <section className="hero ruled-section" id="about" aria-labelledby="profile-title">
          <div className="eyebrow"><span className="status-dot" /> Available for new opportunities</div>
          <p className="hero-kicker">Software Engineer · 5 years experience</p>
          <div className="hero-footer">
            <p>
              I’m Timothy, a mid-level software engineer focused on thoughtful systems,
              maintainable code, and products that hold up beyond the happy path.
            </p>
            <a className="text-link" href="#work">See selected work <ArrowDownRight size={17} /></a>
          </div>
          <div className="profile-block" aria-labelledby="profile-title">
            <p className="profile-label">Profile</p>
            <p className="profile-statement" id="profile-title">
              Five years turning ambiguous requirements into software teams can understand,
              operate, and extend.
            </p>
            <div className="body-columns">
              <p>
                I care about the full lifecycle of a feature: understanding the problem,
                choosing a practical design, shipping it safely, and learning from how it behaves.
              </p>
              <p>
                My best work sits where product judgment and engineering rigor meet. I enjoy
                collaborating across disciplines and leaving systems better than I found them.
              </p>
            </div>
          </div>
        </section>

        <section className="work-section ruled-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><h2 id="work-title">Selected work</h2></div>
            <p>Project details are ready to replace with your real work.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.index}>
                <div className="project-visual" aria-hidden="true">
                  <span className="project-index">PROJECT / {project.index}</span>
                  <div className="visual-window">
                    <span /><span /><span />
                    <div className="visual-diagram"><i /><i /><i /></div>
                  </div>
                </div>
                <div className="project-copy">
                  <div><span>{project.index}</span><ArrowUpRight size={19} /></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section ruled-section" id="experience" aria-labelledby="experience-title">
          <div className="section-label"><p>Experience</p></div>
          <div className="experience-content">
            <div className="experience-heading">
              <div className="experience-icon"><BriefcaseBusiness size={21} /></div>
              <div>
                <p className="meta">Five years in production software</p>
                <h2 id="experience-title">Mid-level scope,<br />end-to-end ownership.</h2>
              </div>
            </div>
            <div className="experience-row">
              <span>01 / Discover</span>
              <p>Clarify the problem, the constraints, and what a useful outcome looks like.</p>
            </div>
            <div className="experience-row">
              <span>02 / Design</span>
              <p>Choose an approach that balances delivery speed with future change.</p>
            </div>
            <div className="experience-row">
              <span>03 / Deliver</span>
              <p>Ship safely, observe the result, and improve the system with what we learn.</p>
            </div>
          </div>
        </section>

        <section className="stack-section ruled-section" aria-labelledby="stack-title">
          <div className="section-heading stack-heading">
            <div><h2 id="stack-title">Tech stack</h2></div>
            <p>Technologies and practices from production full-stack work.</p>
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
          <p className="meta">Have an interesting problem?</p>
          <h2 id="contact-title">Let’s build something<br /><em>worth maintaining.</em></h2>
          <div className="contact-bottom">
            <p>
              I’m currently exploring software engineering opportunities. Reach me at{' '}
              <a href="mailto:timwong101@gmail.com">timwong101@gmail.com</a>.
            </p>
            <a className="contact-cta" href="mailto:timwong101@gmail.com">
              Email me <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Timothy Wong · Software Engineer</p>
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
