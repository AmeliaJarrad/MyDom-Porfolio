import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getProjectById } from '../../services/project-services';
import classes from './ProjectPage.module.scss';

export default function ProjectPage() {
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('PENDING');

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setFetchStatus('LOADING');
    getProjectById(id)
      .then((data) => {
        setFetchStatus('SUCCESS');
        setProject(data);
      })
      .catch((e) => {
        setFetchStatus('FAILURE');
        setError(e);
      });
  }, [id]);

  if (fetchStatus === 'LOADING') {
    return <p>Loading...</p>;
  }

  if (fetchStatus === 'FAILURE') {
    return <p style={{ color: 'red' }}>{error.message}</p>;
  }

  if (fetchStatus === 'SUCCESS' && project) {
    return (
      <div className={classes.projectPage}>
        <h1>{project.name}</h1>

        <div className={classes.contentWrapper}>
          {/* Screenshot gallery */}
          {project.screenshots?.length > 0 && (
            <div className={classes.screenshotGallery}>
              <h3>Screenshots</h3>
              <div className={classes.screenshotGrid}>
                {project.screenshots.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`${project.name} screenshot ${index + 1}`}
                    loading="lazy"
                    className={classes.screenshotImage}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Info panel */}
          <div className={classes.projectInfo}>
            <p className={classes.description}>{project.description}</p>

            <h4>Built With:</h4>
            <ul className={classes.techList}>
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className={classes.links}>
              <div className={classes.linkItem}>
                {project.demoLink ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.linkButton}
                  >
                    View Demo
                  </a>
                ) : (
                  <p className={classes.linkText}>
                    <em>Demo coming soon — contact me for access</em>
                  </p>
                )}
              </div>

              <div className={classes.linkItem}>
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.linkButton}
                  >
                    View on GitHub
                  </a>
                ) : (
                  <p className={classes.linkText}>
                    <em>GitHub repo private or coming soon</em>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

       <div className={classes.backButtonWrapper}>
        <a onClick={() => navigate('/projects')} className={classes.linkButton}>
          Back
        </a>
      </div>

      </div>
    );
  }

  return null; // fallback safety
}
