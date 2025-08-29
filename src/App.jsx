import NavBar from './components/NavBar/NavBar.jsx';
import About from './pages/About/About.jsx'
import RecentProjects from './components/RecentProjects/RecentProjects.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <About />
        <RecentProjects />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
