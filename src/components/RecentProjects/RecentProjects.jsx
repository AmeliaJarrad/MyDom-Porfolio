import ProjectList from '../ProjectList/ProjectList';
import classes from './RecentProjects.module.scss'; 
import { Link } from 'react-router-dom';

export default function RecentProjects({ projects }) {
  console.log('Recent projects:', projects); 

  if (!projects || projects.length === 0) {
    return <p>No recent projects to display.</p>;
  }

  return (
    <section className={classes.recentProjectsSection}>
      <h2>Recent Projects</h2>
      <p>Here are some of my latest works — feel free to explore!</p>
       <Link to="/projects" className={classes.viewAllLink}>
        View All Projects →
        </Link>
      <ProjectList projects={projects} variant="compact" />
     
    </section>
  );
}


