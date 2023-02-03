import { useState } from 'react'
import './components/Navbar'
import './components/Header'
import './components/Projects'
import  About from './components/About'
import './components/Skills'
import './components/Contact'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <div className="h1">This will be my portfolio site.</div>
    </div>
  );
}

export default App
