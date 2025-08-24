import NavBar from './components/NavBar/NavBar.jsx';
import About from './pages/About/About.jsx'
import RecentProjects from './components/RecentProjects/RecentProjects.jsx'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <About />
        <RecentProjects />
      </main>
    </>
  );
}

export default App;
