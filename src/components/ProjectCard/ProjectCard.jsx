import classes from './ProjectCard.module.scss';
import { Link } from 'react-router-dom';

export default function ProjectCard({ projectData }) {
  const { id, name, description, imageUrl, techStack } = projectData;

  return (
    <div className={classes.card}>
      <Link to={`/project/${id}`}>
        <h3>{name}</h3>
        <img src={imageUrl} alt={name} />
      </Link>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
