import {
  Braces,
  Database,
  Frame,
  TerminalSquare,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import {
  siAngular,
  siApachekafka,
  siDocker,
  siDotnet,
  siFigma,
  siGit,
  siGithub,
  siGithubcopilot,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siRedis,
  siSplunk,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  type SimpleIcon,
} from 'simple-icons';

const brandIcons: Record<string, SimpleIcon> = {
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Python: siPython,
  React: siReact,
  Angular: siAngular,
  'Tailwind CSS': siTailwindcss,
  Figma: siFigma,
  '.NET': siDotnet,
  'Next.js': siNextdotjs,
  'Node.js': siNodedotjs,
  PostgreSQL: siPostgresql,
  Redis: siRedis,
  Kafka: siApachekafka,
  Docker: siDocker,
  Vercel: siVercel,
  Vite: siVite,
  Git: siGit,
  GitHub: siGithub,
  'GitHub Copilot': siGithubcopilot,
  Postman: siPostman,
  Splunk: siSplunk,
};

const localIcons: Record<string, string> = {
  'C#': 'csharp',
  Java: 'java',
  AWS: 'amazonwebservices',
  'Microsoft SQL Server': 'microsoftsqlserver',
  Playwright: 'playwright',
};

const genericIcons: Record<string, LucideIcon> = {
  SQL: Database,
  'REST APIs': Braces,
  'Oracle Database': Database,
  Codex: TerminalSquare,
  BullMQ: Workflow,
  Canvas: Frame,
};

type TechIconProps = {
  name: string;
};

export function TechIcon({ name }: TechIconProps) {
  const localIcon = localIcons[name];

  if (localIcon) {
    return <img className="tech-icon" src={`/icons/${localIcon}.svg`} alt="" aria-hidden="true" width="13" height="13" />;
  }

  const brandIcon = brandIcons[name];

  if (brandIcon) {
    return (
      <svg
        className="tech-icon"
        data-tech={name}
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{ color: `#${brandIcon.hex}` }}
      >
        <path fill="currentColor" d={brandIcon.path} />
      </svg>
    );
  }

  const GenericIcon = genericIcons[name] ?? Braces;
  return <GenericIcon className="tech-icon tech-icon-generic" aria-hidden="true" />;
}
