import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import RecentProjects from '../../components/RecentProjects/RecentProjects';
import { getAllProjects } from '../../services/project-services';
import Education from '../../components/Education/Education.jsx';


console.log('Home component rendered');

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('PENDING');
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect triggered");
    console.log("Fetching projects...");
    setFetchStatus('LOADING');
    getAllProjects()
      .then((data) => {
        console.log("Data received:", data);
        setProjects(data.projects ?? data); // support both /db.json and full backend
        setFetchStatus('SUCCESS');
      })
      .catch((e) => {
        console.error("Error fetching:", e);
        setError(e);
        setFetchStatus('FAILURE');
      });
  }, []);

  return (
    <>
      <About />
      {fetchStatus === 'LOADING' && <p>Loading projects...</p>}
      {fetchStatus === 'FAILURE' && <p style={{ color: 'red' }}>{error.message}</p>}
      {fetchStatus === 'SUCCESS' && (
        <RecentProjects projects={projects.slice(0, 3)} />
      )}
      <div style={{ marginTop: '1rem' }}>
    </div>
    <Education />
    </>
  );
}
