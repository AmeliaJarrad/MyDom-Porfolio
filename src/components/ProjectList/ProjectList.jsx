import ProjectCard from '../ProjectCard/ProjectCard';
import classes from './ProjectList.module.scss';

export default function ProjectList({ projects = [], variant = 'grid' }) {
  return (
    <section className={`${classes.container} ${classes[variant]}`}>
      {projects.map((project) => (
        <ProjectCard key={project.id} projectData={project} />
      ))}
    </section>
  );
}
