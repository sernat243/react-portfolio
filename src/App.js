import './App.css';
import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header />
      <Projects />
      <AboutMe />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
