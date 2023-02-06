import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
