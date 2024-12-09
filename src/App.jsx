
import { useState } from 'react'
import React from "react";
import "./App.css"; // Reference to the CSS file

// Import Components
import AnimatedTitle from "./components/AnimatedTitle";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <AnimatedTitle />
        <p>Welcome to my portfolio! Explore my projects, skills, and contact me for collaboration.</p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <Contact />
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} 

export default App */